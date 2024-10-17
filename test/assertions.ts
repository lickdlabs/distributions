import { assert } from "chai";
import { Ern382, Ern383, Ern411, Erns, ErnVersions } from "../src";

export const assert382 = (ern: Erns) => {
  assert.equal(ern.version, ErnVersions.ERN_382);
  assert.equal(ern.action, Ern382.Actions.NEW_RELEASE_MESSAGE);
  assert.exists(ern.element);
  assert.isNotEmpty(ern.element);
  assert.isObject(ern.element);
};

export const assert383 = (ern: Erns) => {
  assert.equal(ern.version, ErnVersions.ERN_383);
  assert.equal(ern.action, Ern383.Actions.NEW_RELEASE_MESSAGE);
  assert.exists(ern.element);
  assert.isNotEmpty(ern.element);
  assert.isObject(ern.element);
};

export const assert411 = (ern: Erns) => {
  assert.equal(ern.version, ErnVersions.ERN_411);
  assert.equal(ern.action, Ern411.Actions.NEW_RELEASE_MESSAGE);
  assert.exists(ern.element);
  assert.isNotEmpty(ern.element);
  assert.isObject(ern.element);
};
