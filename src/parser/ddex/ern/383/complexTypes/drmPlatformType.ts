import { Ern383 } from "../../../../../types";

export const parseDrmPlatformType = (object: any): Ern383.DrmPlatformType => ({
  _attributes: object.$
    ? {
        version: object.$.Version || undefined,
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
