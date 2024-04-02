/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KNSEnsExit, KNSEnsExitInterface } from "../KNSEnsExit";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_kns",
        type: "address",
        internalType: "address",
      },
      {
        name: "_lz",
        type: "address",
        internalType: "address",
      },
      {
        name: "_lzc",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "__initTLDRegistration",
    inputs: [
      {
        name: "fqdn",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "tld",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "auth",
    inputs: [
      {
        name: "_nodeId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_sender",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ensowners",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "kns",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "lz",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ILayerZeroEndpoint",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "lzReceive",
    inputs: [
      {
        name: "_chain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "_path",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_payload",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "lzc",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [
      {
        name: "node",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "ping",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setBaseNode",
    inputs: [
      {
        name: "node",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setEntry",
    inputs: [
      {
        name: "_entry",
        type: "address",
        internalType: "address",
      },
      {
        name: "_entrychain",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setKNSRecords",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "fqdn",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "data",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "simulate",
    inputs: [
      {
        name: "_payload",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "trustedentries",
    inputs: [
      {
        name: "",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "Error",
    inputs: [
      {
        name: "error",
        type: "bytes4",
        indexed: false,
        internalType: "bytes4",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Pinged",
    inputs: [
      {
        name: "",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "EthNameTooShort",
    inputs: [],
  },
  {
    type: "error",
    name: "NotEthName",
    inputs: [],
  },
  {
    type: "error",
    name: "ParentNotRegistered",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x61010060405234801561001157600080fd5b506040516200155138038062001551833981016040819052610032916100cb565b3360e0526001600160a01b0392831660c052911660805261ffff1660a0527f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae60009081526020527f859ecef2e168dc10231b000bd53493b42bc9d944cac29d94582c1e1d4359213180546001600160a01b03191630179055610119565b80516001600160a01b03811681146100c657600080fd5b919050565b6000806000606084860312156100e057600080fd5b6100e9846100af565b92506100f7602085016100af565b9150604084015161ffff8116811461010e57600080fd5b809150509250925092565b60805160a05160c05160e0516113e26200016f60003960008181610245015261085d0152600081816101da0152818161072d01526107c70152600061013901526000818161017801526102df01526113e26000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c80635c36b18611610097578063a5cc9b8c11610066578063a5cc9b8c14610267578063aff820041461027a578063b7a9d55d146102a3578063c4a6ed1c146102b457600080fd5b80635c36b186146101fc5780636352211e146102045780636a0d1c341461022d5780638da5cb5b1461024057600080fd5b806330ff44b6116100d357806330ff44b61461013457806333f97b5914610173578063516a166a146101b257806355bf3ec7146101d557600080fd5b80621d3567146100f9578063124039161461010e5780632421706214610121575b600080fd5b61010c610107366004610ca3565b6102d4565b005b61010c61011c366004610d3d565b505050565b61010c61012f366004610d89565b6104e6565b61015b7f000000000000000000000000000000000000000000000000000000000000000081565b60405161ffff90911681526020015b60405180910390f35b61019a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161016a565b6101c56101c0366004610de2565b61052f565b604051901515815260200161016a565b61019a7f000000000000000000000000000000000000000000000000000000000000000081565b61010c61056a565b61019a610212366004610e0e565b6000908152602081905260409020546001600160a01b031690565b61010c61023b366004610e27565b6105ab565b61019a7f000000000000000000000000000000000000000000000000000000000000000081565b61010c610275366004610ed5565b610852565b61019a610288366004610e0e565b6000602081905290815260409020546001600160a01b031681565b61010c6102b1366004610e0e565b50565b6102c76102c2366004610eff565b6108db565b60405161016a9190610f3e565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103375760405162461bcd60e51b815260206004820152600360248201526210b63d60e91b60448201526064015b60405180910390fd5b61ffff86166000908152600160205260408120805461035590610f71565b80601f016020809104026020016040519081016040528092919081815260200182805461038190610f71565b80156103ce5780601f106103a3576101008083540402835291602001916103ce565b820191906000526020600020905b8154815290600101906020018083116103b157829003601f168201915b5050505050905080516000141580156103e75750805185145b8015610410575085856040516103fe929190610fab565b60405180910390208180519060200120145b6104475760405162461bcd60e51b8152602060048201526008602482015267085d1c9d5cdd195960c21b604482015260640161032e565b60008061048d305a609688888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061097592505050565b91509150816104db576020818101516040516001600160e01b03198216815290917f366d96da3b5ec9f4aeb519f286b40eccd096a5d8f2321095eb415fb56d32f0cc910160405180910390a1505b505050505050505050565b610529305a609685858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061097592505050565b50505050565b60006001600160a01b03821630148061056157506000838152602081905260409020546001600160a01b038381169116145b90505b92915050565b33301461057657600080fd5b6040513081527fcd1f5876a7d71dd23dec305977c08069d94c421d8eccf041570b143e2312045d9060200160405180910390a1565b3330146105b757600080fd5b60058310156105d95760405163a0b3278960e01b815260040160405180910390fd5b83836105e6600582610fd1565b6105f292869290610fe4565b604051610600929190610fab565b6040519081900390207fc65934a88d283a635602ca15e14e8b9a9a3d150eacacca3b07f4a85f5fdbface1461064757604051624945f960e61b815260040160405180910390fd5b60008061068986868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a0092505050565b90925090507f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae82148015906106d357506000828152602081905260409020546001600160a01b0316155b156106f1576040516336e8c0db60e21b815260040160405180910390fd5b6000818152602081905260409081902080546001600160a01b0319166001600160a01b038a8116919091179091559051633255528360e21b81527f00000000000000000000000000000000000000000000000000000000000000009091169063c9554a0c906107669089908990600401611037565b6020604051808303816000875af1158015610785573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a99190611053565b5082156108495760405163e32954eb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e32954eb906108009084908890889060040161106c565b6000604051808303816000875af115801561081f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610847919081019061115c565b505b50505050505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461088757600080fd5b6040516bffffffffffffffffffffffff19606084811b8216602084015230901b16603482015260480160408051601f1981840301815291815261ffff831660009081526001602052209061011c90826112c3565b600160205260009081526040902080546108f490610f71565b80601f016020809104026020016040519081016040528092919081815260200182805461092090610f71565b801561096d5780601f106109425761010080835404028352916020019161096d565b820191906000526020600020905b81548152906001019060200180831161095057829003601f168201915b505050505081565b6000606060008060008661ffff1667ffffffffffffffff81111561099b5761099b611115565b6040519080825280601f01601f1916602001820160405280156109c5576020820181803683370190505b50905060008087516020890160008d8df191503d9250868311156109e7578692505b828152826000602083013e909890975095505050505050565b6000808080610a0f8582610a59565b90925090506000610a208683610b60565b60408051602080820184905281830187905282518083038401815260609092019092528051910120909150819094509450505050915091565b60008083518310610aac5760405162461bcd60e51b815260206004820152601e60248201527f726561644c6162656c3a20496e646578206f7574206f6620626f756e64730000604482015260640161032e565b6000848481518110610ac057610ac0611383565b016020015160f81c905060408110610b1a5760405162461bcd60e51b815260206004820152601960248201527f726561644c6162656c3a204c6162656c20746f6f206c6f6e6700000000000000604482015260640161032e565b8015610b3c57610b3585610b2f866001611399565b83610c1f565b9250610b41565b600092505b610b4b8185611399565b610b56906001611399565b9150509250929050565b6000806000610b6f8585610a59565b909250905081610be15760018551610b879190610fd1565b8414610bd55760405162461bcd60e51b815260206004820152601d60248201527f6e616d65686173683a204a756e6b20617420656e64206f66206e616d65000000604482015260640161032e565b50600091506105649050565b610beb8582610b60565b6040805160208101929092528101839052606001604051602081830303815290604052805190602001209250505092915050565b8251600090610c2e8385611399565b1115610c3957600080fd5b5091016020012090565b803561ffff81168114610c5557600080fd5b919050565b60008083601f840112610c6c57600080fd5b50813567ffffffffffffffff811115610c8457600080fd5b602083019150836020828501011115610c9c57600080fd5b9250929050565b60008060008060008060808789031215610cbc57600080fd5b610cc587610c43565b9550602087013567ffffffffffffffff80821115610ce257600080fd5b610cee8a838b01610c5a565b9097509550604089013591508082168214610d0857600080fd5b90935060608801359080821115610d1e57600080fd5b50610d2b89828a01610c5a565b979a9699509497509295939492505050565b600080600060408486031215610d5257600080fd5b833567ffffffffffffffff811115610d6957600080fd5b610d7586828701610c5a565b909790965060209590950135949350505050565b60008060208385031215610d9c57600080fd5b823567ffffffffffffffff811115610db357600080fd5b610dbf85828601610c5a565b90969095509350505050565b80356001600160a01b0381168114610c5557600080fd5b60008060408385031215610df557600080fd5b82359150610e0560208401610dcb565b90509250929050565b600060208284031215610e2057600080fd5b5035919050565b600080600080600060608688031215610e3f57600080fd5b610e4886610dcb565b9450602086013567ffffffffffffffff80821115610e6557600080fd5b610e7189838a01610c5a565b90965094506040880135915080821115610e8a57600080fd5b818801915088601f830112610e9e57600080fd5b813581811115610ead57600080fd5b8960208260051b8501011115610ec257600080fd5b9699959850939650602001949392505050565b60008060408385031215610ee857600080fd5b610ef183610dcb565b9150610e0560208401610c43565b600060208284031215610f1157600080fd5b61056182610c43565b60005b83811015610f35578181015183820152602001610f1d565b50506000910152565b6020815260008251806020840152610f5d816040850160208701610f1a565b601f01601f19169190910160400192915050565b600181811c90821680610f8557607f821691505b602082108103610fa557634e487b7160e01b600052602260045260246000fd5b50919050565b8183823760009101908152919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561056457610564610fbb565b60008085851115610ff457600080fd5b8386111561100157600080fd5b5050820193919092039150565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60208152600061104b60208301848661100e565b949350505050565b60006020828403121561106557600080fd5b5051919050565b6000604082018583526020604060208501528185835260608501905060608660051b86010192508660005b8781101561110757868503605f190183528135368a9003601e190181126110bd57600080fd5b8901848101903567ffffffffffffffff8111156110d957600080fd5b8036038213156110e857600080fd5b6110f387828461100e565b965050509183019190830190600101611097565b509298975050505050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561115457611154611115565b604052919050565b6000602080838503121561116f57600080fd5b825167ffffffffffffffff8082111561118757600080fd5b8185019150601f86601f84011261119d57600080fd5b8251828111156111af576111af611115565b8060051b6111be86820161112b565b918252848101860191868101908a8411156111d857600080fd5b87870192505b83831015611265578251868111156111f65760008081fd5b8701603f81018c136112085760008081fd5b8881015160408882111561121e5761121e611115565b61122f828901601f19168c0161112b565b8281528e828486010111156112445760008081fd5b611253838d8301848701610f1a565b855250505091870191908701906111de565b9a9950505050505050505050565b601f82111561011c576000816000526020600020601f850160051c8101602086101561129c5750805b601f850160051c820191505b818110156112bb578281556001016112a8565b505050505050565b815167ffffffffffffffff8111156112dd576112dd611115565b6112f1816112eb8454610f71565b84611273565b602080601f831160018114611326576000841561130e5750858301515b600019600386901b1c1916600185901b1785556112bb565b600085815260208120601f198616915b8281101561135557888601518255948401946001909101908401611336565b50858210156113735787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b8082018082111561056457610564610fbb56fea26469706673582212208197e0f5b459d95709cef50ad0fe845f867790febbf6af1b6d9bd7ff0a9b876064736f6c63430008170033";

type KNSEnsExitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KNSEnsExitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KNSEnsExit__factory extends ContractFactory {
  constructor(...args: KNSEnsExitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _kns: string,
    _lz: string,
    _lzc: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<KNSEnsExit> {
    return super.deploy(
      _kns,
      _lz,
      _lzc,
      overrides || {}
    ) as Promise<KNSEnsExit>;
  }
  override getDeployTransaction(
    _kns: string,
    _lz: string,
    _lzc: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_kns, _lz, _lzc, overrides || {});
  }
  override attach(address: string): KNSEnsExit {
    return super.attach(address) as KNSEnsExit;
  }
  override connect(signer: Signer): KNSEnsExit__factory {
    return super.connect(signer) as KNSEnsExit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KNSEnsExitInterface {
    return new utils.Interface(_abi) as KNSEnsExitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KNSEnsExit {
    return new Contract(address, _abi, signerOrProvider) as KNSEnsExit;
  }
}
