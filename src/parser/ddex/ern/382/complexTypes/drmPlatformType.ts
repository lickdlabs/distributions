import { Ern382 } from "../../../../../types";

export const parseDrmPlatformType = (object: any): Ern382.DrmPlatformType => ({
  _attributes: object.$
    ? {
        version: object.$.Version || undefined,
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
