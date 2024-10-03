import { Ern411 } from "../../../../../types";

export const parseImageCodecType = (object: any): Ern411.ImageCodecType => ({
  _attributes: object.$
    ? {
        version: object.$.Version || undefined,
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
