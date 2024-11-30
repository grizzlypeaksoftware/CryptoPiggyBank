const CryptoPiggyBank = artifacts.require("CryptoPiggyBank");

module.exports = function (deployer) {
  deployer.deploy(CryptoPiggyBank);
};
