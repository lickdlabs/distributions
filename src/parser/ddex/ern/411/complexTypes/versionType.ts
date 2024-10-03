import { Ern411 } from "../../../../../types";

export const parseVersionType = (object: any): Ern411.VersionType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
