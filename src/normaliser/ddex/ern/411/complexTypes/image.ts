import { Ern411 } from "../../../../../types";

export const normaliseImage = (
  image: Ern411.Image,
  release: Ern411.Release,
): void => {
  image.displayTitleText = release.displayTitleText;
  image.displayTitle = release.displayTitle;
  image.displayArtistName = release.displayArtistName;
  image.displayArtist = release.displayArtist;
};
