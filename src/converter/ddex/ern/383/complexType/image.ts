import { Avs411, Ern383, Ern411 } from "../../../../../types";
import { convertCLineWithDefault } from "./cLineWithDefault";
import { convertContributor } from "./contributor";
import { convertCourtesyLineWithDefault } from "./courtesyLineWithDefault";
import { convertDescriptionWithTerritory } from "./descriptionWithTerritory";
import { convertDisplayArtistFromName } from "./displayArtist";
import { convertDisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { convertDisplayTitleFromTitle } from "./displayTitle";
import { convertDisplayTitleText } from "./displayTitleText";
import { convertEventDateWithoutFlags } from "./eventDateWithoutFlags";
import { convertImageType } from "./imageType";
import { convertParentalWarningTypeWithTerritory } from "./parentalWarningTypeWithTerritory";
import { convertResourceProprietaryId } from "./resourceProprietaryId";
import { convertTechnicalImageDetails } from "./technicalImageDetails";

export const convertImage = (
  parties: Ern411.Party[],
  image: Ern383.Image,
  territory: Ern383.ImageDetailsByTerritory,
): Ern411.Image => ({
  _attributes: image._attributes
    ? {
        languageAndScriptCode: image._attributes.languageAndScriptCode,
        isSupplemental: undefined,
      }
    : undefined,
  resourceReference: image.resourceReference,
  type: image.imageType
    ? convertImageType(image.imageType)
    : {
        value: Avs411.ImageType.UNKNOWN,
      },
  resourceId: image.imageId.map((resourceId) =>
    convertResourceProprietaryId(resourceId),
  ),
  displayTitleText: image.title?.map((displayTitleText) =>
    convertDisplayTitleText(displayTitleText.titleText),
  ),
  displayTitle: image.title?.map((displayTitle) =>
    convertDisplayTitleFromTitle(displayTitle),
  ),
  additionalTitle: undefined,
  versionType: undefined,
  displayArtistName: territory.displayArtistName?.map((displayArtistName) =>
    convertDisplayArtistNameWithDefault(displayArtistName),
  ),
  displayArtist: territory.displayArtistName?.map((displayArtist) =>
    convertDisplayArtistFromName(parties, displayArtist),
  ),
  contributor: territory.resourceContributor?.map((contributor) =>
    convertContributor(parties, contributor),
  ),
  resourceRightsController: undefined,
  workRightsController: undefined,
  cLine: territory.cLine?.map((cLine) => convertCLineWithDefault(cLine)),
  courtesyLine: territory.courtesyLine
    ? [convertCourtesyLineWithDefault(territory.courtesyLine)]
    : undefined,
  creationDate: image.creationDate
    ? convertEventDateWithoutFlags(image.creationDate)
    : undefined,
  firstPublicationDate: undefined,
  parentalWarningType: territory.parentalWarningType?.map(
    (parentalWarningType) =>
      convertParentalWarningTypeWithTerritory(parentalWarningType),
  ),
  relatedRelease: undefined,
  relatedResource: undefined,
  containsHiddenContent: undefined,
  description: territory.description
    ? [convertDescriptionWithTerritory(territory.description)]
    : undefined,
  technicalDetails: territory.technicalImageDetails
    ? territory.technicalImageDetails.map((technicalImageDetails) =>
        convertTechnicalImageDetails(technicalImageDetails),
      )
    : undefined,
});
