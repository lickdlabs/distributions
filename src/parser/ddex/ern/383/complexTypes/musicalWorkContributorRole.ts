import { Ern383 } from "../../../../../types";

export const parseMusicalWorkContributorRole = (
  object: any,
): Ern383.MusicalWorkContributorRole => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
