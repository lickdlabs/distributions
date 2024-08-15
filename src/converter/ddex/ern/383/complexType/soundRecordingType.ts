import { Avs411, Ern383, Ern411 } from "../../../../../types";

export const convertSoundRecordingType = (
  soundRecordingType: Ern383.SoundRecordingType,
): Ern411.SoundRecordingType => ({
  _attributes: soundRecordingType._attributes
    ? {
        namespace: soundRecordingType._attributes.namespace,
        userDefinedValue: soundRecordingType._attributes.userDefinedValue,
      }
    : undefined,
  value: soundRecordingType.value as unknown as Avs411.SoundRecordingType,
});
