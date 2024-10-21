import { Avs411, Ern411 } from "../../../../../types";

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
  if (!image.relatedRelease) {
    image.relatedRelease = [
      {
        releaseRelationshipType: {
          value: Avs411.ReleaseRelationshipType.UNKNOWN,
        },
        releaseId: release.releaseId,
        displayTitleText: release.displayTitleText,
        displayTitle: release.displayTitle,
        additionalTitle: release.additionalTitle,
        displayArtistName: release.displayArtistName,
        releaseLabelReference: release.releaseLabelReference,
        releaseDate: release.releaseDate?.shift(),
        originalReleaseDate: release.originalReleaseDate?.shift(),
      },
    ];
  }
};
