import { Avs20200108, Avs411, Ern383, Ern411 } from "../../../../../types";

export const convertDisplayArtistRole = (
  artistRole: Ern383.ArtistRole,
): Ern411.DisplayArtistRole => ({
  _attributes: artistRole._attributes
    ? {
        namespace: artistRole._attributes.namespace,
        userDefinedValue: artistRole._attributes.userDefinedValue,
      }
    : undefined,
  value: artistRole.value as unknown as Avs411.DisplayArtistRole,
});
