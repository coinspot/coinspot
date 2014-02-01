#!/usr/bin/env node

var sys = require('sys');
var exec = require('child_process').exec;
var program = require('commander');

var coinspot = {
    
    init: function () {
        program
        .version('0.0.1')
        .option('-t, --transaction [txid]', 'Process a transaction')
        .parse(process.argv);

        if (program.transaction) {
            this.getTransaction(program.transaction);
        }
    },

    getTransaction: function (txid) {
        exec("bitcoind gettransaction " + txid, this.processTransaction);
    },

    processTransaction: function (err, stdout, stderr) {
        console.log(stdout);
        var transaction = JSON.parse(stdout);
        console.log(transaction.amount);
    }

}

coinspot.init();
