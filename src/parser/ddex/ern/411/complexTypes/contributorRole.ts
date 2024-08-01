import { Ern411 } from "../../../../../types";

export const parseContributorRole = (object: any): Ern411.ContributorRole => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
