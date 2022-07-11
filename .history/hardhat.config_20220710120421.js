require("@nomiclabs/hardhat-waffle");
// Import and configure dotenv
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Zf4nkTrdCRTI6564oN82jG3mh89oPjZi",
      accounts: ["Zf4nkTrdCRTI6564oN82jG3mh89oPjZi"]
    },
  },
};