import { Ern383 } from "../../../../../types";

export const parseReleaseType = (object: any): Ern383.ReleaseType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
