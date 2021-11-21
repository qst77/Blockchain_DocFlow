var Contract = artifacts.require("./A.sol");
var Contract2 = artifacts.require("./AdminInfoContract.sol");
module.exports = function(deployer) {
  deployer.deploy(Contract);
  deployer.deploy(Contract2);
};
