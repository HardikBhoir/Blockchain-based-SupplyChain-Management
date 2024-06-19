# lib used
npm install --save-dev "hardhat@^2.14.0" "@nomicfoundation/hardhat-toolbox@^2.0.0" "@nomiclabs/hardhat-waffle"

# changes to be made before performing below steps
 In "hardhat.config.js" file paste your RPC server link and Metamask Private_Key


# steps
1. npm install
2. cd Smart_Contarct
3. npx hardhat compile
4. npx hardhat run scripts/deploy.js --network ganache
5. paste CONTRACT_ADDRESS into "index.js" in Client/lib/index.js
6. paste "DrugDetection.json" in Client/utils
7. cd ..
8. cd Client
9. npm run dev