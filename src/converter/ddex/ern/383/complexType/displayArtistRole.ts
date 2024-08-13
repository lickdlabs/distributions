import { Avs411, Ern411 } from "../../../../../types";

export const convertDisplayArtistRole = (
  value: Avs411.DisplayArtistRole = Avs411.DisplayArtistRole.ARTIST,
): Ern411.DisplayArtistRole => ({
  _attributes: undefined,
  value,
});
