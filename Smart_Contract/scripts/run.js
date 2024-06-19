const hre = require("hardhat");

async function main() {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const DrugContractFactory = await hre.ethers.getContractFactory(
    "DrugDetection"
  );
  const drugContract = await DrugContractFactory.deploy();

  await drugContract.deployed();

  console.log("Contract deployed to:", drugContract.address);
  // console.log("Owner is:", owner.address);
  // console.log("Another User is:", randomPerson.address);

  const manCreation = await drugContract.createManufacturer(
    "Aman",
    "https://Ajha.com",
    randomPerson.address
  );
  await manCreation.wait();
  console.log(await drugContract.getManufacture(randomPerson.address));
  const drugCreation = await drugContract.createDrug(
    "Dolo650",
    "paracetamol",
    200,
    randomPerson.address
  );
  await drugCreation.wait();
  console.log(await drugContract.getDrug(0));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
