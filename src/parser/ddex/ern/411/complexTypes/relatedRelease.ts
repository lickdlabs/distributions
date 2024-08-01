import { Ern411 } from "../../../../../types";
import { parseAdditionalTitle } from "./additionalTitle";
import { parseDisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { parseDisplayTitle } from "./displayTitle";
import { parseDisplayTitleText } from "./displayTitleText";
import { parseEventDateWithoutFlags } from "./eventDateWithoutFlags";
import { parseReleaseId } from "./releaseId";
import { parseReleaseLabelReference } from "./releaseLabelReference";
import { parseReleaseRelationshipType } from "./releaseRelationshipType";

export const parseRelatedRelease = (object: any): Ern411.RelatedRelease => ({
  releaseRelationshipType: parseReleaseRelationshipType(
    object.ReleaseRelationshipType[0],
  ),
  releaseId: parseReleaseId(object.ReleaseId[0]),
  displayTitleText: object.DisplayTitleText
    ? object.DisplayTitleText.map((displayTitleText: any) =>
        parseDisplayTitleText(displayTitleText),
      )
    : undefined,
  displayTitle: object.DisplayTitle
    ? object.DisplayTitle.map((displayTitle: any) =>
        parseDisplayTitle(displayTitle),
      )
    : undefined,
  additionalTitle: object.AdditionalTitle
    ? object.AdditionalTitle.map((additionalTitle: any) =>
        parseAdditionalTitle(additionalTitle),
      )
    : undefined,
  displayArtistName: object.DisplayArtistNameWithDefault
    ? object.DisplayArtistNameWithDefault.map((displayArtistName: any) =>
        parseDisplayArtistNameWithDefault(displayArtistName),
      )
    : undefined,
  releaseLabelReference: object.ReleaseLabelReference
    ? object.ReleaseLabelReference.map((releaseLabelReference: any) =>
        parseReleaseLabelReference(releaseLabelReference),
      )
    : undefined,
  releaseDate: object.ReleaseDate
    ? parseEventDateWithoutFlags(object.ReleaseDate[0])
    : undefined,
  originalReleaseDate: object.OriginalReleaseDate
    ? parseEventDateWithoutFlags(object.OriginalReleaseDate[0])
    : undefined,
});
