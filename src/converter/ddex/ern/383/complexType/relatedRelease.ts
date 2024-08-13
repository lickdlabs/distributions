import { Avs411, Ern383, Ern411 } from "../../../../../types";
import { convertDisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { convertDisplayTitleFromReferenceTitle } from "./displayTitle";
import { convertDisplayTitleText } from "./displayTitleText";
import { convertEventDateWithoutFlags } from "./eventDateWithoutFlags";
import { convertReleaseId } from "./releaseId";
import { convertReleaseLabelReference } from "./releaseLabelReference";

export const convertRelatedRelease = (
  parties: Ern411.Party[],
  relatedRelease: Ern383.RelatedRelease,
  territory?: Ern383.ReleaseSummaryDetailsByTerritory,
): Ern411.RelatedRelease => ({
  releaseRelationshipType: {
    _attributes: undefined,
    value: Avs411.ReleaseRelationshipType.UNKNOWN,
  },
  releaseId: convertReleaseId(relatedRelease.releaseId[0]),
  displayTitleText: relatedRelease.referenceTitle
    ? [convertDisplayTitleText(relatedRelease.referenceTitle.titleText)]
    : undefined,
  displayTitle: relatedRelease.referenceTitle
    ? [convertDisplayTitleFromReferenceTitle(relatedRelease.referenceTitle)]
    : undefined,
  additionalTitle: undefined,
  displayArtistName: territory?.displayArtistName
    ? territory.displayArtistName.map((displayArtistName) =>
        convertDisplayArtistNameWithDefault(displayArtistName),
      )
    : undefined,
  releaseLabelReference: territory?.labelName
    ? territory.labelName.map((releaseLabelReference) =>
        convertReleaseLabelReference(parties, releaseLabelReference),
      )
    : undefined,
  releaseDate: relatedRelease.releaseDate
    ? convertEventDateWithoutFlags(relatedRelease.releaseDate)
    : undefined,
  originalReleaseDate: relatedRelease.originalReleaseDate
    ? convertEventDateWithoutFlags(relatedRelease.originalReleaseDate)
    : undefined,
});
