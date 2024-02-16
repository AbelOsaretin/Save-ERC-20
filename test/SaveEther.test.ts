/* eslint-disable no-undef */
// Right click on the script name and hit "Run" to execute
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SaveERC20", function () {
  it("test deposit into contract", async function () {
    const conAddress = 0xe104a233a99ddd0ec23291731678ecf20a624cf7;
    const SaveERC20 = await ethers.getContractFactory("SaveERC20", conAddress);
    const contract = await SaveERC20.deploy();
    await contract.deployed();
    console.log("storage deployed at:" + contract.address);
    const _amount = 10;
    //expect((await contract.deposit(_amount)));
  });
  //   it("test updating and retrieving updated value", async function () {
  //     const Storage = await ethers.getContractFactory("Storage");
  //     const storage = await Storage.deploy();
  //     await storage.deployed();
  //     const storage2 = await ethers.getContractAt("Storage", storage.address);
  //     const setValue = await storage2.store(56);
  //     await setValue.wait();
  //     expect((await storage2.retrieve()).toNumber()).to.equal(56);
  //   });
});
