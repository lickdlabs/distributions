import { assert } from "chai";
import { Ern382, Ern383, Ern411, Ern43, Erns, ErnVersions } from "../src";

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

export const assert43 = (ern: Erns) => {
  assert.equal(ern.version, ErnVersions.ERN_43);
  assert.equal(ern.action, Ern43.Actions.NEW_RELEASE_MESSAGE);
  assert.exists(ern.element);
  assert.isNotEmpty(ern.element);
  assert.isObject(ern.element);

  const element = (ern as Ern43.ErnNewReleaseMessage).element;
  const soundRecording = element.resourceList.soundRecording?.[0];

  assert.exists(soundRecording, "expected sound recording to be parsed");
  assert.lengthOf(
    soundRecording!.resourceId,
    1,
    "expected ResourceId to be lifted from SoundRecordingEdition",
  );
  assert.lengthOf(
    soundRecording!.pLine!,
    1,
    "expected PLine to be lifted from SoundRecordingEdition",
  );
  assert.lengthOf(
    soundRecording!.technicalDetails!,
    1,
    "expected TechnicalDetails to be lifted from SoundRecordingEdition",
  );
};
