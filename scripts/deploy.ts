// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { BigNumber } from "ethers";
import hardhat, { ethers } from "hardhat";

async function main() {
  const ERC721DogyRace = await ethers.getContractFactory("ERC721DogyRace")
  const erc721DogyRace = await ERC721DogyRace.deploy(500, 2, "https://gateway.pinata.cloud/ipfs/QmWQgjq53fjTmhrDgQY7xq4uzhFoZThh7ashZbJJ9sd68P/")

  await erc721DogyRace.deployed();
  const networkName = hardhat.network.name;
  switch (networkName) {
    case "rinkeby":
      console.log(`ERC721DogyRace deployed to: https://rinkeby.etherscan.io/address/${erc721DogyRace.address}#code`);
      break;
    case "bscTestnet":
      console.log(`ERC721DogyRace deployed to: https://testnet.bscscan.com/address/${erc721DogyRace.address}#code`);
      break;
    case "bsc":
      console.log(`ERC721DogyRace deployed to: https://bscscan.com/address/${erc721DogyRace.address}#code`);
      break;
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
