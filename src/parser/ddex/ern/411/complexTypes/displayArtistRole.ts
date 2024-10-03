import { Ern411 } from "../../../../../types";

export const parseDisplayArtistRole = (
  object: any,
): Ern411.DisplayArtistRole => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
