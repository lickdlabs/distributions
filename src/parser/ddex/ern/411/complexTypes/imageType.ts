import { Ern411 } from "../../../../../types";

export const parseImageType = (object: any): Ern411.ImageType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
