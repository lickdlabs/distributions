import { Ern411 } from "../../../../../types";

export const parseSoundRecordingType = (
  object: any,
): Ern411.SoundRecordingType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
