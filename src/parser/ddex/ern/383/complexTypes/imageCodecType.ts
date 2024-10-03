import { Ern383 } from "../../../../../types";

export const parseImageCodecType = (object: any): Ern383.ImageCodecType => ({
  _attributes: object.$
    ? {
        version: object.$.Version || undefined,
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
