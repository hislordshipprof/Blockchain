require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/iAXO2DaQiNXk0YXF8z4_NgBluX32oPLX",
      accounts: [
        "81dbfa9d2d2e90d784844e1acf478eef7a36905a47d5af1b531e7fdc4ca7e009",
      ],
    },
  },
};
