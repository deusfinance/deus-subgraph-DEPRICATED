// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Locked extends ethereum.Event {
  get params(): Locked__Params {
    return new Locked__Params(this);
  }
}

export class Locked__Params {
  _event: Locked;

  constructor(event: Locked) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get lockedAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sandAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timeAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sandAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get lockedAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Vault__sandAndTimeAmountResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Vault__usersResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Vault extends ethereum.SmartContract {
  static bind(address: Address): Vault {
    return new Vault("Vault", address);
  }

  endLockBlock(): BigInt {
    let result = super.call("endLockBlock", "endLockBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_endLockBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("endLockBlock", "endLockBlock():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getWithdrawAmount(amount: BigInt, user: Address): BigInt {
    let result = super.call(
      "getWithdrawAmount",
      "getWithdrawAmount(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(user)
      ]
    );

    return result[0].toBigInt();
  }

  try_getWithdrawAmount(
    amount: BigInt,
    user: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getWithdrawAmount",
      "getWithdrawAmount(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(user)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lockedToken(): Address {
    let result = super.call("lockedToken", "lockedToken():(address)", []);

    return result[0].toAddress();
  }

  try_lockedToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("lockedToken", "lockedToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sandAndTimeAmount(
    amount: BigInt,
    _user: Address
  ): Vault__sandAndTimeAmountResult {
    let result = super.call(
      "sandAndTimeAmount",
      "sandAndTimeAmount(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(_user)
      ]
    );

    return new Vault__sandAndTimeAmountResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_sandAndTimeAmount(
    amount: BigInt,
    _user: Address
  ): ethereum.CallResult<Vault__sandAndTimeAmountResult> {
    let result = super.tryCall(
      "sandAndTimeAmount",
      "sandAndTimeAmount(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(_user)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Vault__sandAndTimeAmountResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  sandController(): Address {
    let result = super.call("sandController", "sandController():(address)", []);

    return result[0].toAddress();
  }

  try_sandController(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "sandController",
      "sandController():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sandToken(): Address {
    let result = super.call("sandToken", "sandToken():(address)", []);

    return result[0].toAddress();
  }

  try_sandToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("sandToken", "sandToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  startBlock(): BigInt {
    let result = super.call("startBlock", "startBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_startBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("startBlock", "startBlock():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  timeController(): Address {
    let result = super.call("timeController", "timeController():(address)", []);

    return result[0].toAddress();
  }

  try_timeController(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "timeController",
      "timeController():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  timeToken(): Address {
    let result = super.call("timeToken", "timeToken():(address)", []);

    return result[0].toAddress();
  }

  try_timeToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("timeToken", "timeToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  users(param0: Address): Vault__usersResult {
    let result = super.call("users", "users(address):(uint256,uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return new Vault__usersResult(result[0].toBigInt(), result[1].toBigInt());
  }

  try_users(param0: Address): ethereum.CallResult<Vault__usersResult> {
    let result = super.tryCall("users", "users(address):(uint256,uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Vault__usersResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _lockedToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _feeCalculator(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _feeCollector(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _timeToken(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _sandController(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _timeController(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class LockCall extends ethereum.Call {
  get inputs(): LockCall__Inputs {
    return new LockCall__Inputs(this);
  }

  get outputs(): LockCall__Outputs {
    return new LockCall__Outputs(this);
  }
}

export class LockCall__Inputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class LockCall__Outputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }
}

export class LockForCall extends ethereum.Call {
  get inputs(): LockForCall__Inputs {
    return new LockForCall__Inputs(this);
  }

  get outputs(): LockForCall__Outputs {
    return new LockForCall__Outputs(this);
  }
}

export class LockForCall__Inputs {
  _call: LockForCall;

  constructor(call: LockForCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _user(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class LockForCall__Outputs {
  _call: LockForCall;

  constructor(call: LockForCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetBlocksCall extends ethereum.Call {
  get inputs(): SetBlocksCall__Inputs {
    return new SetBlocksCall__Inputs(this);
  }

  get outputs(): SetBlocksCall__Outputs {
    return new SetBlocksCall__Outputs(this);
  }
}

export class SetBlocksCall__Inputs {
  _call: SetBlocksCall;

  constructor(call: SetBlocksCall) {
    this._call = call;
  }

  get _startBlock(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _endLockBlock(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetBlocksCall__Outputs {
  _call: SetBlocksCall;

  constructor(call: SetBlocksCall) {
    this._call = call;
  }
}

export class SetSandControllerCall extends ethereum.Call {
  get inputs(): SetSandControllerCall__Inputs {
    return new SetSandControllerCall__Inputs(this);
  }

  get outputs(): SetSandControllerCall__Outputs {
    return new SetSandControllerCall__Outputs(this);
  }
}

export class SetSandControllerCall__Inputs {
  _call: SetSandControllerCall;

  constructor(call: SetSandControllerCall) {
    this._call = call;
  }

  get _sandController(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSandControllerCall__Outputs {
  _call: SetSandControllerCall;

  constructor(call: SetSandControllerCall) {
    this._call = call;
  }
}

export class SetTimeControllerCall extends ethereum.Call {
  get inputs(): SetTimeControllerCall__Inputs {
    return new SetTimeControllerCall__Inputs(this);
  }

  get outputs(): SetTimeControllerCall__Outputs {
    return new SetTimeControllerCall__Outputs(this);
  }
}

export class SetTimeControllerCall__Inputs {
  _call: SetTimeControllerCall;

  constructor(call: SetTimeControllerCall) {
    this._call = call;
  }

  get _timeController(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTimeControllerCall__Outputs {
  _call: SetTimeControllerCall;

  constructor(call: SetTimeControllerCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawAllLockedTokensCall extends ethereum.Call {
  get inputs(): WithdrawAllLockedTokensCall__Inputs {
    return new WithdrawAllLockedTokensCall__Inputs(this);
  }

  get outputs(): WithdrawAllLockedTokensCall__Outputs {
    return new WithdrawAllLockedTokensCall__Outputs(this);
  }
}

export class WithdrawAllLockedTokensCall__Inputs {
  _call: WithdrawAllLockedTokensCall;

  constructor(call: WithdrawAllLockedTokensCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawAllLockedTokensCall__Outputs {
  _call: WithdrawAllLockedTokensCall;

  constructor(call: WithdrawAllLockedTokensCall) {
    this._call = call;
  }
}

export class WithdrawLockedTokensCall extends ethereum.Call {
  get inputs(): WithdrawLockedTokensCall__Inputs {
    return new WithdrawLockedTokensCall__Inputs(this);
  }

  get outputs(): WithdrawLockedTokensCall__Outputs {
    return new WithdrawLockedTokensCall__Outputs(this);
  }
}

export class WithdrawLockedTokensCall__Inputs {
  _call: WithdrawLockedTokensCall;

  constructor(call: WithdrawLockedTokensCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawLockedTokensCall__Outputs {
  _call: WithdrawLockedTokensCall;

  constructor(call: WithdrawLockedTokensCall) {
    this._call = call;
  }
}
