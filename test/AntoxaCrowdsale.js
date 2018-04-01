'use strict';

const Token = artifacts.require('SmartToken.sol'); // контракт
const Crowdsale = artifacts.require('SmartCrowdsale.sol'); // контракт

contract('SmartCrowdsale', async (accounts) => { // массив аккаунтов из тестовой ноды
    it('simple test', async () => {
        let token = await Token.new({from: accounts[0]}); // токен
        let crowdsale = await Crowdsale.new( // распродажа
            accounts[3], // куда идут средства от продажи
            token.address, // адрес токена
            {from: accounts[0]}
            );

        await token.transferOwnership(crowdsale.address, {from: accounts[0]});
        // контракт распродажи как владелец токена, что бы был выпуск новых токенов

        await crowdsale.sendTransaction({from: accounts[5], value: 100});
        // отправляем на контракт эфир

        assert.equal(100000, await token.balanceOf(accounts[5]));
        // проверяем обмен по курсу
    })


}); // тест для контракта