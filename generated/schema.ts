// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class VaultEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save VaultEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save VaultEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("VaultEntity", id.toString(), this);
  }

  static load(id: string): VaultEntity | null {
    return store.get("VaultEntity", id) as VaultEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get lockedAmount(): BigInt {
    let value = this.get("lockedAmount");
    return value.toBigInt();
  }

  set lockedAmount(value: BigInt) {
    this.set("lockedAmount", Value.fromBigInt(value));
  }

  get sealedAmount(): BigInt {
    let value = this.get("sealedAmount");
    return value.toBigInt();
  }

  set sealedAmount(value: BigInt) {
    this.set("sealedAmount", Value.fromBigInt(value));
  }

  get timeAmount(): BigInt {
    let value = this.get("timeAmount");
    return value.toBigInt();
  }

  set timeAmount(value: BigInt) {
    this.set("timeAmount", Value.fromBigInt(value));
  }
}

export class LPEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LPEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LPEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LPEntity", id.toString(), this);
  }

  static load(id: string): LPEntity | null {
    return store.get("LPEntity", id) as LPEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get amount0In(): BigInt {
    let value = this.get("amount0In");
    return value.toBigInt();
  }

  set amount0In(value: BigInt) {
    this.set("amount0In", Value.fromBigInt(value));
  }

  get amount1In(): BigInt {
    let value = this.get("amount1In");
    return value.toBigInt();
  }

  set amount1In(value: BigInt) {
    this.set("amount1In", Value.fromBigInt(value));
  }

  get amount0Out(): BigInt {
    let value = this.get("amount0Out");
    return value.toBigInt();
  }

  set amount0Out(value: BigInt) {
    this.set("amount0Out", Value.fromBigInt(value));
  }

  get amount1Out(): BigInt {
    let value = this.get("amount1Out");
    return value.toBigInt();
  }

  set amount1Out(value: BigInt) {
    this.set("amount1Out", Value.fromBigInt(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }
}

export class StakingEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakingEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakingEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakingEntity", id.toString(), this);
  }

  static load(id: string): StakingEntity | null {
    return store.get("StakingEntity", id) as StakingEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }
}

export class StakingRewardPerBlockEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save StakingRewardPerBlockEntity entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakingRewardPerBlockEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakingRewardPerBlockEntity", id.toString(), this);
  }

  static load(id: string): StakingRewardPerBlockEntity | null {
    return store.get(
      "StakingRewardPerBlockEntity",
      id
    ) as StakingRewardPerBlockEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get oldValue(): BigInt {
    let value = this.get("oldValue");
    return value.toBigInt();
  }

  set oldValue(value: BigInt) {
    this.set("oldValue", Value.fromBigInt(value));
  }

  get newValue(): BigInt {
    let value = this.get("newValue");
    return value.toBigInt();
  }

  set newValue(value: BigInt) {
    this.set("newValue", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }
}
