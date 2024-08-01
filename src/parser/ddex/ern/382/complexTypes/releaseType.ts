import { Ern382 } from "../../../../../types";

export const parseReleaseType = (object: any): Ern382.ReleaseType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
