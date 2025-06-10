export const wagmiContractConfig = {
    address: "0x547ee72D19C51786E6318d48a0cbF81D02Ddf260",
    abi: [
        {
            type: "constructor",
            inputs: [{ name: "_owner", type: "address", internalType: "address" }],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "getWinStatus",
            inputs: [],
            outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "maxScoreDifference",
            inputs: [],
            outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "owner",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "pull",
            inputs: [{ name: "isTeam1", type: "bool", internalType: "bool" }],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "reSet",
            inputs: [
                { name: "_maxScoreDifference", type: "uint8", internalType: "uint8" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
        },
        {
            type: "function",
            name: "ropePosition",
            inputs: [],
            outputs: [{ name: "", type: "int8", internalType: "int8" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "team1Score",
            inputs: [],
            outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
            stateMutability: "view",
        },
        {
            type: "function",
            name: "team2Score",
            inputs: [],
            outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
            stateMutability: "view",
        },
    ],
} as const;
