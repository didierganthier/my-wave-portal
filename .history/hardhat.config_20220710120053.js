require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "YOUR_ALCHEMY_API_URL",
      accounts: ["Zf4nkTrdCRTI6564oN82jG3mh89oPjZi"]
    },
  },
};