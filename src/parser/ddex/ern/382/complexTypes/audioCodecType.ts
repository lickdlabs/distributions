import { Ern382 } from "../../../../../types";

export const parseAudioCodecType = (object: any): Ern382.AudioCodecType => ({
  _attributes: object.$
    ? {
        version: object.$.Version || undefined,
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
