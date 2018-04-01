'use strict';

const Token = artifacts.require('SmartToken.sol'); // контракт

contract('SmartToken', async (accounts) => { // массив аккаунтов из тестовой ноды
    it('simple test', async () => {
        let instance = await Token.new({from: accounts[0]});
        // деплой(от 0ого акка) контракта в тестовую сеть(локальная)

        await instance.mint(accounts[1], 100, {from: accounts[0]});
        // создание токенов для адреса с помощью mint из MintableToken

        assert.equal(100, await instance.balanceOf(accounts[1]));
        // проверка баланса по адресу, balanceOf из Basic token

        await instance.transfer(accounts[2], 50, {from: accounts[1]});
        // перевод 50 вей от 1 ого аккаунта ко 2 аккаунту
        assert.equal(50, await instance.balanceOf(accounts[1]));
        assert.equal(50, await instance.balanceOf(accounts[2]));

        await instance.burn(50, {from: accounts[2]});
        // сжигаем 50 вей
        assert.equal(0, await instance.balanceOf(accounts[2]));

        assert.equal(50, await instance.totalSupply());
        // Basic token
    })
}); // тест для контракта