# Blockchain based SupplyChain Management (ReactJS + Vite)

## Project Overview

This project aims to address the issue of counterfeit drugs in the pharmaceutical industry by leveraging blockchain technology. It provides a system that ensures the authenticity and traceability of drugs from manufacturers to patients, thereby enhancing trust and transparency in the supply chain.

## Motivation

Counterfeit drugs pose a significant threat to public health and safety, causing harmful effects on patients and financial losses for legitimate pharmaceutical companies. Existing systems for tracking drugs are often inadequate, lacking the transparency and security needed to effectively combat counterfeiting. Blockchain technology offers a promising solution by providing a secure, immutable ledger for tracking drug transactions.

## Problem Statement

Implementing blockchain technology to detect fake medicine and manage the pharmaceutical supply chain. This project focuses on using the latest technology to ensure the integrity and authenticity of drugs in the market.

## Objectives

- Increase trust and transparency by allowing manufacturers and customers to track pharmaceutical products throughout the supply chain.
- Protect the privacy of manufacturers and patients.
- Enhance the traceability and security of drugs using blockchain, one of the most secure ledger systems available.

## Proposed System

The proposed system utilizes blockchain to create a transparent and reliable drug tracing system. It assigns unique IDs to each drug, allowing for verification of its authenticity at every stage of the supply chain. The system can identify substandard and expired drugs, ensuring only genuine products reach patients.

## Technologies Used

- **Blockchain Network**: Ethereum
- **Programming Language**: Solidity
- **Development Tools**: Remix IDE, Visual Studio Code
- **Other Tools**: Hardhat, Ganache, Metamask

## Requirements

### Hardware

- **Mobile**: Android 6 & above, 2GB RAM & above, minimum 1GB space required
- **Laptop/PC**: Minimum 4GB RAM & 6GB hard disk space required

### Software

- Ethereum blockchain network
- Solidity 0.8.3+
- Remix IDE
- Visual Studio Code
- Hardhat
- Ganache
- Metamask

## Implementation

The project employs a Proof-of-Authority (PoA) consensus mechanism to validate transactions within the blockchain network. This approach ensures efficient and secure validation processes, making it suitable for private or consortium blockchains.

## Results

The blockchain-based system enhances the transparency and traceability of the drug supply chain. It mitigates the risk of counterfeit drugs by providing an immutable ledger that tracks the entire journey of a drug, from manufacture to patient delivery.

## Future Work

- Conduct feasibility studies and nationwide tests for large-scale implementation.
- Collaborate with government bodies to define project scope and establish standards.
- Invest in research and development to overcome challenges and enhance the system.

## Needful steps to run project
  
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
