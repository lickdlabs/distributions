import { Ern382 } from "../../../../../types";

export const parseResourceContributorRole = (
  object: any,
): Ern382.ResourceContributorRole => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
