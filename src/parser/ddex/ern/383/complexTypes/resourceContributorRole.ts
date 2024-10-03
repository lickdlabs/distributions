import { Ern383 } from "../../../../../types";

export const parseResourceContributorRole = (
  object: any,
): Ern383.ResourceContributorRole => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
