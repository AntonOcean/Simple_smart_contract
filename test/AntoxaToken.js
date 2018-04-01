'use strict'

const Token = artifacts.require('SmartToken.sol');

contract('SmartToken', async (accounts) => {
    it('simple test', async () => {
        let instance = await Token.new({from: accounts[0]});
        await instance.mint(accounts[1], 100, {from: accounts[0]});
        assert.equal(100, await instance.balanceOf(accounts[1]));

    })
});