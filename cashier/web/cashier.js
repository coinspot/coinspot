if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to web.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


while (bitcoinAddress.substring(1, 5) !== 'Marc') { bitcoinAddress = new Bitcoin.ECKey(false).getBitcoinAddress(); }

var key = new Bitcoin.ECKey(false);
var bitcoinAddress = key.getBitcoinAddress();
var privateKeyWif = key.getBitcoinWalletImportFormat();
var stop = false;

while (true && !stop) {

  key = new Bitcoin.ECKey(false);
  bitcoinAddress = key.getBitcoinAddress();
  console.log(bitcoinAddress);
  
  if (bitcoinAddress.substring(1, 5) == 'Marc') {
  
    privateKeyWif = key.getBitcoinWalletImportFormat();
    console.log(privateKeyWif);

    break;
  }

}

stop = true;

