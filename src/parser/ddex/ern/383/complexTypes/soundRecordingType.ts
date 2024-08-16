import { Ern383 } from "../../../../../types";

export const parseSoundRecordingType = (
  object: any,
): Ern383.SoundRecordingType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});