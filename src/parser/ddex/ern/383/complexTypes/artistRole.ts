import { Ern383 } from "../../../../../types";

export const parseArtistRole = (object: any): Ern383.ArtistRole => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
