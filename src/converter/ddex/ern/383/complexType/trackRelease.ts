import { Ern383, Ern411 } from "../../../../../types";
import { convertDisplayTitleFromReferenceTitle } from "./displayTitle";
import { convertDisplayTitleText } from "./displayTitleText";
import { convertGenreWithTerritory } from "./genreWithTerritory";
import { convertKeywords } from "./keywords";
import { convertReleaseId } from "./releaseId";
import { convertReleaseLabelReference } from "./releaseLabelReference";
import { convertReleaseReference } from "./releaseReference";
import { convertSynopsisWithTerritory } from "./synopsisWithTerritory";

export const convertTrackRelease = (
  parties: Ern411.Party[],
  release: Ern383.Release,
  territory?: Ern383.ReleaseDetailsByTerritory,
): Ern411.TrackRelease => {
  return {
    _attributes: release._attributes
      ? {
          isMainRelease: release._attributes.isMainRelease,
        }
      : undefined,
    releaseReference: convertReleaseReference(release.releaseReference),
    releaseId: convertReleaseId(release.releaseId[0]),
    displayTitleText: [
      convertDisplayTitleText(release.referenceTitle.titleText),
    ],
    displayTitle: [
      convertDisplayTitleFromReferenceTitle(release.referenceTitle),
    ],
    additionalTitle: undefined,
    releaseResourceReference:
      release.releaseResourceReferenceList?.releaseResourceReference.shift()
        ?.value as Ern411.TrackRelease["releaseResourceReference"],
    linkedReleaseResourceReference: undefined,
    releaseLabelReference: territory?.labelName
      ? territory.labelName.map((labelName) =>
          convertReleaseLabelReference(parties, labelName),
        )
      : [],
    genre: territory?.genre
      ? territory.genre.map((genre) => convertGenreWithTerritory(genre))
      : [],
    keywords: territory?.keywords
      ? territory?.keywords.map((keywords) => convertKeywords(keywords))
      : undefined,
    synopsis: territory?.synopsis
      ? [convertSynopsisWithTerritory(territory?.synopsis)]
      : undefined,
    marketingComment: undefined,
  };
};
