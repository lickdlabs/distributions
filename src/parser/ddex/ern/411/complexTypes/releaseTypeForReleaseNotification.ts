import { Ern411 } from "../../../../../types";

export const parseReleaseTypeForReleaseNotification = (
  object: any,
): Ern411.ReleaseTypeForReleaseNotification => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
