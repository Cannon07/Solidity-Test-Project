# Solidity Test Project

A basic Solidity smart contract for reading and updating a message, along with Mocha and Ganache tests for local development and deployment on the Sepolia test network.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Deployment](#deployment)
- [Testing](#testing)
- [Contributing](#contributing)

## Introduction

This project contains a Solidity smart contract designed to showcase basic functionality. The contract allows you to read and update a message. It also includes a set of Mocha tests to ensure the contract works as expected.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (for running tests and scripts).
- An Ethereum wallet with test Ether for deploying the contract on the Sepolia test network.
- Ganache installed (for local development and testing).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Cannon07/Solidity-Test-Project.git

2. Change into the project directory:

   ```bash
   cd Solidity-Test-Project

3. Install project dependencies:

   ```bash
   npm install

## Usage

### Deployment

To deploy the contract on the Sepolia test network, follow these steps:

1. Update the deploy.js file with your wallet mnemonics and Sepolia network configuration.

2. Deploy the contract:
   
   ```bash
   node deploy.js

## Testing

To run the Mocha tests, use the following command:

```bash
npm run test
```

## Contributing

Contributions are welcome! If you find any issues or have improvements to suggest, please open an issue or create a pull request.
   
