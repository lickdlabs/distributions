import { Avs20200108, Avs411, Ern411 } from "../../../../../types";

export const convertDisplayArtistRole = (
  value: Avs20200108.ArtistRole,
): Ern411.DisplayArtistRole => ({
  _attributes: undefined,
  value: value as unknown as Avs411.DisplayArtistRole,
});
