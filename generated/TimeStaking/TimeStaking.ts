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

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class EmergencyWithdraw extends ethereum.Event {
  get params(): EmergencyWithdraw__Params {
    return new EmergencyWithdraw__Params(this);
  }
}

export class EmergencyWithdraw__Params {
  _event: EmergencyWithdraw;

  constructor(event: EmergencyWithdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
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

export class RewardClaimed extends ethereum.Event {
  get params(): RewardClaimed__Params {
    return new RewardClaimed__Params(this);
  }
}

export class RewardClaimed__Params {
  _event: RewardClaimed;

  constructor(event: RewardClaimed) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RewardPerBlockChanged extends ethereum.Event {
  get params(): RewardPerBlockChanged__Params {
    return new RewardPerBlockChanged__Params(this);
  }
}

export class RewardPerBlockChanged__Params {
  _event: RewardPerBlockChanged;

  constructor(event: RewardPerBlockChanged) {
    this._event = event;
  }

  get oldValue(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
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

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TimeStaking__usersResult {
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

export class TimeStaking extends ethereum.SmartContract {
  static bind(address: Address): TimeStaking {
    return new TimeStaking("TimeStaking", address);
  }

  daoShare(): BigInt {
    let result = super.call("daoShare", "daoShare():(uint256)", []);

    return result[0].toBigInt();
  }

  try_daoShare(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("daoShare", "daoShare():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  daoWallet(): Address {
    let result = super.call("daoWallet", "daoWallet():(address)", []);

    return result[0].toAddress();
  }

  try_daoWallet(): ethereum.CallResult<Address> {
    let result = super.tryCall("daoWallet", "daoWallet():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  earlyFoundersShare(): BigInt {
    let result = super.call(
      "earlyFoundersShare",
      "earlyFoundersShare():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_earlyFoundersShare(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "earlyFoundersShare",
      "earlyFoundersShare():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  earlyFoundersWallet(): Address {
    let result = super.call(
      "earlyFoundersWallet",
      "earlyFoundersWallet():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_earlyFoundersWallet(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "earlyFoundersWallet",
      "earlyFoundersWallet():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lastUpdatedBlock(): BigInt {
    let result = super.call(
      "lastUpdatedBlock",
      "lastUpdatedBlock():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_lastUpdatedBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastUpdatedBlock",
      "lastUpdatedBlock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  particleCollector(): BigInt {
    let result = super.call(
      "particleCollector",
      "particleCollector():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_particleCollector(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "particleCollector",
      "particleCollector():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pendingReward(_user: Address): BigInt {
    let result = super.call(
      "pendingReward",
      "pendingReward(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_pendingReward(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingReward",
      "pendingReward(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardPerBlock(): BigInt {
    let result = super.call("rewardPerBlock", "rewardPerBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardPerBlock",
      "rewardPerBlock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardTillNowPerToken(): BigInt {
    let result = super.call(
      "rewardTillNowPerToken",
      "rewardTillNowPerToken():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_rewardTillNowPerToken(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardTillNowPerToken",
      "rewardTillNowPerToken():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardToken(): Address {
    let result = super.call("rewardToken", "rewardToken():(address)", []);

    return result[0].toAddress();
  }

  try_rewardToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("rewardToken", "rewardToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  scale(): BigInt {
    let result = super.call("scale", "scale():(uint256)", []);

    return result[0].toBigInt();
  }

  try_scale(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("scale", "scale():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stakedToken(): Address {
    let result = super.call("stakedToken", "stakedToken():(address)", []);

    return result[0].toAddress();
  }

  try_stakedToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("stakedToken", "stakedToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  users(param0: Address): TimeStaking__usersResult {
    let result = super.call("users", "users(address):(uint256,uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return new TimeStaking__usersResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_users(param0: Address): ethereum.CallResult<TimeStaking__usersResult> {
    let result = super.tryCall("users", "users(address):(uint256,uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TimeStaking__usersResult(value[0].toBigInt(), value[1].toBigInt())
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

  get _stakedToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _rewardToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _rewardPerBlock(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _daoShare(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _earlyFoundersShare(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawCall extends ethereum.Call {
  get inputs(): EmergencyWithdrawCall__Inputs {
    return new EmergencyWithdrawCall__Inputs(this);
  }

  get outputs(): EmergencyWithdrawCall__Outputs {
    return new EmergencyWithdrawCall__Outputs(this);
  }
}

export class EmergencyWithdrawCall__Inputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawCall__Outputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
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

export class SetRewardPerBlockCall extends ethereum.Call {
  get inputs(): SetRewardPerBlockCall__Inputs {
    return new SetRewardPerBlockCall__Inputs(this);
  }

  get outputs(): SetRewardPerBlockCall__Outputs {
    return new SetRewardPerBlockCall__Outputs(this);
  }
}

export class SetRewardPerBlockCall__Inputs {
  _call: SetRewardPerBlockCall;

  constructor(call: SetRewardPerBlockCall) {
    this._call = call;
  }

  get _rewardPerBlock(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetRewardPerBlockCall__Outputs {
  _call: SetRewardPerBlockCall;

  constructor(call: SetRewardPerBlockCall) {
    this._call = call;
  }
}

export class SetSharesCall extends ethereum.Call {
  get inputs(): SetSharesCall__Inputs {
    return new SetSharesCall__Inputs(this);
  }

  get outputs(): SetSharesCall__Outputs {
    return new SetSharesCall__Outputs(this);
  }
}

export class SetSharesCall__Inputs {
  _call: SetSharesCall;

  constructor(call: SetSharesCall) {
    this._call = call;
  }

  get _daoShare(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _earlyFoundersShare(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetSharesCall__Outputs {
  _call: SetSharesCall;

  constructor(call: SetSharesCall) {
    this._call = call;
  }
}

export class SetWalletsCall extends ethereum.Call {
  get inputs(): SetWalletsCall__Inputs {
    return new SetWalletsCall__Inputs(this);
  }

  get outputs(): SetWalletsCall__Outputs {
    return new SetWalletsCall__Outputs(this);
  }
}

export class SetWalletsCall__Inputs {
  _call: SetWalletsCall;

  constructor(call: SetWalletsCall) {
    this._call = call;
  }

  get _daoWallet(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _earlyFoundersWallet(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetWalletsCall__Outputs {
  _call: SetWalletsCall;

  constructor(call: SetWalletsCall) {
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

export class UpdateCall extends ethereum.Call {
  get inputs(): UpdateCall__Inputs {
    return new UpdateCall__Inputs(this);
  }

  get outputs(): UpdateCall__Outputs {
    return new UpdateCall__Outputs(this);
  }
}

export class UpdateCall__Inputs {
  _call: UpdateCall;

  constructor(call: UpdateCall) {
    this._call = call;
  }
}

export class UpdateCall__Outputs {
  _call: UpdateCall;

  constructor(call: UpdateCall) {
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

export class WithdrawAllRewardTokensCall extends ethereum.Call {
  get inputs(): WithdrawAllRewardTokensCall__Inputs {
    return new WithdrawAllRewardTokensCall__Inputs(this);
  }

  get outputs(): WithdrawAllRewardTokensCall__Outputs {
    return new WithdrawAllRewardTokensCall__Outputs(this);
  }
}

export class WithdrawAllRewardTokensCall__Inputs {
  _call: WithdrawAllRewardTokensCall;

  constructor(call: WithdrawAllRewardTokensCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawAllRewardTokensCall__Outputs {
  _call: WithdrawAllRewardTokensCall;

  constructor(call: WithdrawAllRewardTokensCall) {
    this._call = call;
  }
}

export class WithdrawAllStakedtokensCall extends ethereum.Call {
  get inputs(): WithdrawAllStakedtokensCall__Inputs {
    return new WithdrawAllStakedtokensCall__Inputs(this);
  }

  get outputs(): WithdrawAllStakedtokensCall__Outputs {
    return new WithdrawAllStakedtokensCall__Outputs(this);
  }
}

export class WithdrawAllStakedtokensCall__Inputs {
  _call: WithdrawAllStakedtokensCall;

  constructor(call: WithdrawAllStakedtokensCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawAllStakedtokensCall__Outputs {
  _call: WithdrawAllStakedtokensCall;

  constructor(call: WithdrawAllStakedtokensCall) {
    this._call = call;
  }
}

export class WithdrawParticleCollectorCall extends ethereum.Call {
  get inputs(): WithdrawParticleCollectorCall__Inputs {
    return new WithdrawParticleCollectorCall__Inputs(this);
  }

  get outputs(): WithdrawParticleCollectorCall__Outputs {
    return new WithdrawParticleCollectorCall__Outputs(this);
  }
}

export class WithdrawParticleCollectorCall__Inputs {
  _call: WithdrawParticleCollectorCall;

  constructor(call: WithdrawParticleCollectorCall) {
    this._call = call;
  }
}

export class WithdrawParticleCollectorCall__Outputs {
  _call: WithdrawParticleCollectorCall;

  constructor(call: WithdrawParticleCollectorCall) {
    this._call = call;
  }
}
