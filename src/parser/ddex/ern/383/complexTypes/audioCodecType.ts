import { Ern383 } from "../../../../../types";

export const parseAudioCodecType = (object: any): Ern383.AudioCodecType => ({
  _attributes: object.$
    ? {
        version: object.$.Version || undefined,
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
