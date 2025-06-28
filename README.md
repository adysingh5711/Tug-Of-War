# Tug of War: Onchain Competitive Game

Welcome to **Tug of War**, a fully onchain, interactive, and competitive game that brings the classic playground battle to the blockchain. Built for founders and builders who believe in composability, transparency, and the power of decentralized fun.

## Features

### 🪢 Onchain Tug of War Smart Contract
- **Immutable Game Logic:** All game rules and state are enforced by the `TugWarContract.sol` smart contract.
- **Team-Based Competition:** Two teams pull the rope by sending transactions, with every move recorded onchain.
- **Dynamic Scoring:** The rope position and team scores update with every pull, and the contract determines the winner based on configurable rules.
- **Game Over Logic:** Prevents further moves once a team wins by exceeding the max score difference.
- **Owner Controls:** The contract owner can reset the game and adjust the max score difference for new rounds.

### 🎮 Interactive Web Frontend
- **Live Onchain State:** The frontend reads the latest rope position, scores, and win status directly from the blockchain.
- **Real-Time Updates:** Uses block polling to keep the UI in sync with the contract state.
- **Seamless Wallet Integration:** Connect your wallet and cheer for your team with a single click.
- **Visual Feedback:** Animated rope and flag, clear win/loss banners, and transaction status indicators.
- **Transparent Play:** All actions are visible on Etherscan, with direct links to transaction hashes.

## For Builders & Founders
- **Composable:** The contract and frontend are modular—fork, extend, or integrate with your own dapps.
- **Open Source:** MIT licensed, ready for your contributions and experiments.
- **Battle-Tested Stack:** Built with Foundry for Solidity and Vite + Wagmi for the frontend.

## Get Started
- Dive into [`tug-war-contract/`](./tug-war-contract) for the Solidity smart contract and Foundry setup.
- Explore [`tug-war-game/`](./tug-war-game) for the React-based frontend and wallet integration.

Ready to build, play, and win—onchain? Let the tug begin! 