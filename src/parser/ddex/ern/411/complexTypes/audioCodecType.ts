import { Ern411 } from "../../../../../types";

export const parseAudioCodecType = (object: any): Ern411.AudioCodecType => ({
  _attributes: object.$
    ? {
        version: object.$.Version || undefined,
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
