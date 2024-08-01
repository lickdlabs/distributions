import { Ern382 } from "../../../../../types";

export const parseArtistRole = (object: any): Ern382.ArtistRole => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
