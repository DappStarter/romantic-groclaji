require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remain unusual hunt bread blue stem'; 
let testAccounts = [
"0x04081837e0ea1169d38fed5f4cbf49f4adab44ee630ae70158c3b3538a964d66",
"0xe5c57bc4c7e95fed14c633b6d313c651f2d2207458a16cef7e88ca1a88a8fb51",
"0x4d342643804c8f2a2391a36e1ab91eada20fb1ec8cc5300e5e88a81932b85974",
"0xde7dfb5362824f9a32924c46bacae01c6baa9b04e889162ed4f8c5669f154a6a",
"0x6caf84c130553fa555735975461e76851bcf1e16121f41bbb7aa535abd5a12c9",
"0x0ec1bf08f99bd547940a337f48c88e158514158087e9b096df007e2913a26e83",
"0x7c487ab2fc5e7288717fb4dac9ff18c4e2664fbbc5968972d2a277d3873dbc59",
"0x51c1bd0e1c5948e119ecf2e95aa2e1fc38fda24e7f99f63eb6d121cdb164a026",
"0x9474132083b14d516c36ff9ff31c0e6478a338e7b5280884c4a94410692c8253",
"0x55a902d7650a27ac2ba3809a417383dc00898ed481b7ead44df5e2a5ec413ada"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
