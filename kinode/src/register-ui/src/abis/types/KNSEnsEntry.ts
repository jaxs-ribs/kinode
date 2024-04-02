/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface KNSEnsEntryInterface extends utils.Interface {
  functions: {
    "cash()": FunctionFragment;
    "ensnamewrapper()": FunctionFragment;
    "ensregistry()": FunctionFragment;
    "exitlzc()": FunctionFragment;
    "exitpath()": FunctionFragment;
    "lz()": FunctionFragment;
    "lzc()": FunctionFragment;
    "owner()": FunctionFragment;
    "ping()": FunctionFragment;
    "setKNSRecords(bytes,bytes[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cash"
      | "ensnamewrapper"
      | "ensregistry"
      | "exitlzc"
      | "exitpath"
      | "lz"
      | "lzc"
      | "owner"
      | "ping"
      | "setKNSRecords"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "cash", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ensnamewrapper",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ensregistry",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "exitlzc", values?: undefined): string;
  encodeFunctionData(functionFragment: "exitpath", values?: undefined): string;
  encodeFunctionData(functionFragment: "lz", values?: undefined): string;
  encodeFunctionData(functionFragment: "lzc", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "ping", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setKNSRecords",
    values: [BytesLike, BytesLike[]]
  ): string;

  decodeFunctionResult(functionFragment: "cash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ensnamewrapper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ensregistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exitlzc", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exitpath", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lz", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lzc", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ping", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setKNSRecords",
    data: BytesLike
  ): Result;

  events: {};
}

export interface KNSEnsEntry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KNSEnsEntryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cash(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    ensnamewrapper(overrides?: CallOverrides): Promise<[string]>;

    ensregistry(overrides?: CallOverrides): Promise<[string]>;

    exitlzc(overrides?: CallOverrides): Promise<[number]>;

    exitpath(overrides?: CallOverrides): Promise<[string]>;

    lz(overrides?: CallOverrides): Promise<[string]>;

    lzc(overrides?: CallOverrides): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ping(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setKNSRecords(
      fqdn: BytesLike,
      data: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  cash(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  ensnamewrapper(overrides?: CallOverrides): Promise<string>;

  ensregistry(overrides?: CallOverrides): Promise<string>;

  exitlzc(overrides?: CallOverrides): Promise<number>;

  exitpath(overrides?: CallOverrides): Promise<string>;

  lz(overrides?: CallOverrides): Promise<string>;

  lzc(overrides?: CallOverrides): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  ping(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  setKNSRecords(
    fqdn: BytesLike,
    data: BytesLike[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    cash(overrides?: CallOverrides): Promise<void>;

    ensnamewrapper(overrides?: CallOverrides): Promise<string>;

    ensregistry(overrides?: CallOverrides): Promise<string>;

    exitlzc(overrides?: CallOverrides): Promise<number>;

    exitpath(overrides?: CallOverrides): Promise<string>;

    lz(overrides?: CallOverrides): Promise<string>;

    lzc(overrides?: CallOverrides): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    ping(overrides?: CallOverrides): Promise<void>;

    setKNSRecords(
      fqdn: BytesLike,
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    cash(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    ensnamewrapper(overrides?: CallOverrides): Promise<BigNumber>;

    ensregistry(overrides?: CallOverrides): Promise<BigNumber>;

    exitlzc(overrides?: CallOverrides): Promise<BigNumber>;

    exitpath(overrides?: CallOverrides): Promise<BigNumber>;

    lz(overrides?: CallOverrides): Promise<BigNumber>;

    lzc(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ping(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    setKNSRecords(
      fqdn: BytesLike,
      data: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cash(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    ensnamewrapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ensregistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exitlzc(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exitpath(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lz(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lzc(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ping(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setKNSRecords(
      fqdn: BytesLike,
      data: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
