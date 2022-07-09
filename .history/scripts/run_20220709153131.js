const main = async () => {
    const waveContractFactory = await hre.ethers.getContactFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
};