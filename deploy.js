const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
    'patrol powder virus bamboo example table wedding develop peanut bubble faculty fan',
    'https://sepolia.infura.io/v3/0d16dc7ec90f41e6907b0d5205d1e60a'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(abi)
        .deploy({ 
            data: evm.bytecode.object, 
            arguments: ['Hello...'],
        })
        .send({ 
            gas: '1000000', 
            from: accounts[0], 
        });

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
}

deploy();