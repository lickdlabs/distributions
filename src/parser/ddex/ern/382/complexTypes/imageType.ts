import { Ern382 } from "../../../../../types";

export const parseImageType = (object: any): Ern382.ImageType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
