import { ethers } from "hardhat";

async function main() {

  // let [admin1] = await ethers.getSigners()


  const Doings = await ethers.deployContract("RandomMatrix", []);

  // await Doings.wait()
  // console.log(Doings)
  console.log(Doings.target)
// await Doings.getColor (5,7)



}

  // We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });