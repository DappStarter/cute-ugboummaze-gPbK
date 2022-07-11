require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone foot filter raise saddle pumpkin hope armed off giant'; 
let testAccounts = [
"0x7e520663f68af5dac121312bfaec11dd7e8c78abd92169b3e3de9b8299a1682d",
"0x14526bd384be779d04796fdd4f08aaf5984e84c127b53fc7e1607a4df4b532e5",
"0x7218b03a934457f3f666cf9692081d8c8dfb980d92c1480591332a5bf58b4f95",
"0x8ab468369bcf0170756ca5df4e8ec8bc54d60c11b11320b094d1abfe448fd42b",
"0xda860c4ba6474db771dc68eada4593023c79b48648819436ac1b81fc28edc037",
"0x5acb54d7939f537d8cfac1316e5756676eed5eb108698f2a728f825e548708ea",
"0x0c2821de4da8e1d8ceb0c7e8d3431ed09fca0a11d619bab8f0d10f6e82df2986",
"0x4d6312a83233faa1bf833b7c560a6a6362e919b9a6a994ed9b5fff28714c44c8",
"0x06e037efa9de00fa45f4a5f665ef8b77f7f0bdb8219c472c2e1dbe49cd5e68d1",
"0x00ca3204ed1899379dc9598c640c2fd2b8aa17b3eddcca18781ca3e4d39aa5fd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

