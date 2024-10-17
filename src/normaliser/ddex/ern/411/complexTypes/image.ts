import { Ern411 } from "../../../../../types";

export const normaliseImage = (
  image: Ern411.Image,
  release: Ern411.Release,
): void => {
  if (!image.displayTitleText) {
    image.displayTitleText = release.displayTitleText;
  }
  if (!image.displayTitle) {
    image.displayTitle = release.displayTitle;
  }
  if (!image.displayArtistName) {
    image.displayArtistName = release.displayArtistName;
  }
  if (!image.displayArtist) {
    image.displayArtist = release.displayArtist;
  }
};
