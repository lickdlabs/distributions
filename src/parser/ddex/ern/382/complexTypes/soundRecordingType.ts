import { Ern382 } from "../../../../../types";

export const parseSoundRecordingType = (
  object: any,
): Ern382.SoundRecordingType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
