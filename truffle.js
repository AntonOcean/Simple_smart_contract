module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 9545, // test node eth
            network_id: "*" // match any network
        },
        rinkeby: {
            host: "127.0.0.1",
            port: 8544, // deploy
            network_id: 4,
            gasPrice: 1,
            //from: ''
        }
    },
    solc: {
        optimizer: { // settings compile
            enabled: true,
            runs: 200
        }
    }
};
