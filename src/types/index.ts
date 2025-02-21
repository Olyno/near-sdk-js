import { AccountId } from "./account_id";
import { BlockHeight, EpochHeight, Balance, StorageUsage } from "./primitives";
import {
  PromiseResult,
  PromiseError,
  PromiseIndex,
  ReceiptIndex,
  IteratorIndex,
} from "./vm_types";
import { Gas, ONE_TERA_GAS } from "./gas";
import {
  PublicKey,
  CurveType,
  curveTypeFromStr,
  ParsePublicKeyError,
  InvalidLengthError,
  Base58Error,
  UnknownCurve,
} from "./public_key";

export {
  AccountId,
  BlockHeight,
  EpochHeight,
  Balance,
  StorageUsage,
  PromiseResult,
  PromiseError,
  PromiseIndex,
  ReceiptIndex,
  IteratorIndex,
  Gas,
  ONE_TERA_GAS,
  PublicKey,
  CurveType,
  curveTypeFromStr,
  ParsePublicKeyError,
  InvalidLengthError,
  Base58Error,
  UnknownCurve,
};

export type GasWeight = bigint;
export const ONE_YOCTO: Balance = 1n;
export const ONE_NEAR: Balance = 1_000_000_000_000_000_000_000_000n;
