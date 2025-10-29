export const CONTRACT_ADDRESS="0x5873d22c48ecbd4e7d5524c79428a557df0a7b8a"
export const CONTRACT_ABI=[
  { 
    ""anonymous"": false,
    ""inputs"": [
      {
        ""indexed"": false,
        ""internalType"": ""address"",
        ""name"": ""winner"",
        ""type"": ""address""
      }
    ],
    ""name"": ""GameEnded"",
    ""type"": ""event""
  },
  {
    ""anonymous"": false,
    ""inputs"": [
      {
        ""indexed"": false,
        ""internalType"": ""address"",
        ""name"": ""playerX"",
        ""type"": ""address""
      },
      {
        ""indexed"": false,
        ""internalType"": ""address"",
        ""name"": ""playerO"",
        ""type"": ""address""
      }
    ],
    ""name"": ""GameStarted"",
    ""type"": ""event""
  },
  {
    ""anonymous"": false,
    ""inputs"": [
      {
        ""indexed"": false,
        ""internalType"": ""address"",
        ""name"": ""player"",
        ""type"": ""address""
      },
      {
        ""indexed"": false,
        ""internalType"": ""uint8"",
        ""name"": ""position"",
        ""type"": ""uint8""
      }
    ],
    ""name"": ""MoveMade"",
    ""type"": ""event""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""uint256"",
        ""name"": """",
        ""type"": ""uint256""
      }
    ],
    ""name"": ""board"",
    ""outputs"": [
      {
        ""internalType"": ""uint8"",
        ""name"": """",
        ""type"": ""uint8""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [],
    ""name"": ""currentPlayer"",
    ""outputs"": [
      {
        ""internalType"": ""address"",
        ""name"": """",
        ""type"": ""address""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [],
    ""name"": ""gameActive"",
    ""outputs"": [
      {
        ""internalType"": ""bool"",
        ""name"": """",
        ""type"": ""bool""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [],
    ""name"": ""getBoard"",
    ""outputs"": [
      {
        ""internalType"": ""uint8[9]"",
        ""name"": """",
        ""type"": ""uint8[9]""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""uint8"",
        ""name"": ""position"",
        ""type"": ""uint8""
      }
    ],
    ""name"": ""makeMove"",
    ""outputs"": [],
    ""stateMutability"": ""nonpayable"",
    ""type"": ""function""
  },
  {
    ""inputs"": [],
    ""name"": ""playerO"",
    ""outputs"": [
      {
        ""internalType"": ""address"",
        ""name"": """",
        ""type"": ""address""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [],
    ""name"": ""playerX"",
    ""outputs"": [
      {
        ""internalType"": ""address"",
        ""name"": """",
        ""type"": ""address""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  },
  {
    ""inputs"": [
      {
        ""internalType"": ""address"",
        ""name"": ""opponent"",
        ""type"": ""address""
      }
    ],
    ""name"": ""startGame"",
    ""outputs"": [],
    ""stateMutability"": ""nonpayable"",
    ""type"": ""function""
  },
  {
    ""inputs"": [],
    ""name"": ""winner"",
    ""outputs"": [
      {
        ""internalType"": ""address"",
        ""name"": """",
        ""type"": ""address""
      }
    ],
    ""stateMutability"": ""view"",
    ""type"": ""function""
  }
]
