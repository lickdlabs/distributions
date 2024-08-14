import { Ern411 } from "../../../../../types";
import { parseAdditionalTitle } from "./additionalTitle";
import { parseCLineWithDefault } from "./cLineWithDefault";
import { parseContributor } from "./contributor";
import { parseCourtesyLineWithDefault } from "./courtesyLineWithDefault";
import { parseDescriptionWithTerritory } from "./descriptionWithTerritory";
import { parseDisplayArtist } from "./displayArtist";
import { parseDisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { parseDisplayTitle } from "./displayTitle";
import { parseDisplayTitleText } from "./displayTitleText";
import { parseEventDateWithoutFlags } from "./eventDateWithoutFlags";
import { parseFulfillmentDateWithTerritory } from "./fulfillmentDateWithTerritory";
import { parseImageType } from "./imageType";
import { parseParentalWarningTypeWithTerritory } from "./parentalWarningTypeWithTerritory";
import { parseRelatedRelease } from "./relatedRelease";
import { parseRelatedResource } from "./relatedResource";
import { parseResourceProprietaryId } from "./resourceProprietaryId";
import { parseResourceRightsController } from "./resourceRightsController";
import { parseTechnicalImageDetails } from "./technicalImageDetails";
import { parseVersionType } from "./versionType";
import { parseWorkRightsController } from "./workRightsController";

export const parseImage = (object: any): Ern411.Image => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        isSupplemental: object.$.IsSupplemental
          ? object.$.IsSupplemental === "true"
          : undefined,
      }
    : undefined,
  resourceReference: object.ResourceReference[0],
  type: parseImageType(object.Type[0]),
  resourceId: object.ResourceId.map((resourceId: any) =>
    parseResourceProprietaryId(resourceId),
  ),
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
  versionType: object.VersionType
    ? object.VersionType.map((versionType: any) =>
        parseVersionType(versionType),
      )
    : undefined,
  displayArtistName: object.DisplayArtistName
    ? object.DisplayArtistName.map((displayArtistName: any) =>
        parseDisplayArtistNameWithDefault(displayArtistName),
      )
    : undefined,
  displayArtist: object.DisplayArtist
    ? object.DisplayArtist.map((displayArtist: any) =>
        parseDisplayArtist(displayArtist),
      )
    : undefined,
  contributor: object.Contributor
    ? object.Contributor.map((contributor: any) =>
        parseContributor(contributor),
      )
    : undefined,
  resourceRightsController: object.ResourceRightsController
    ? object.ResourceRightsController.map((resourceRightsController: any) =>
        parseResourceRightsController(resourceRightsController),
      )
    : undefined,
  workRightsController: object.WorkRightsController
    ? object.WorkRightsController.map((workRightsController: any) =>
        parseWorkRightsController(workRightsController),
      )
    : undefined,
  cLine: object.CLine
    ? object.CLine.map((cLine: any) => parseCLineWithDefault(cLine))
    : undefined,
  courtesyLine: object.CourtesyLine
    ? object.CourtesyLine.map((courtesyLine: any) =>
        parseCourtesyLineWithDefault(courtesyLine),
      )
    : undefined,
  creationDate: object.CreationDate
    ? parseEventDateWithoutFlags(object.CreationDate[0])
    : undefined,
  firstPublicationDate: object.FirstPublicationDate
    ? object.FirstPublicationDate.map((firstPublicationDate: any) =>
        parseFulfillmentDateWithTerritory(firstPublicationDate),
      )
    : undefined,
  parentalWarningType: object.ParentalWarningType
    ? object.ParentalWarningType.map((parentalWarningType: any) =>
        parseParentalWarningTypeWithTerritory(parentalWarningType),
      )
    : undefined,
  relatedRelease: object.RelatedRelease
    ? object.RelatedRelease.map((relatedRelease: any) =>
        parseRelatedRelease(relatedRelease),
      )
    : undefined,
  relatedResource: object.RelatedResource
    ? object.RelatedResource.map((relatedResource: any) =>
        parseRelatedResource(relatedResource),
      )
    : undefined,
  containsHiddenContent: object.ContainsHiddenContent
    ? object.ContainsHiddenContent[0] === "true"
    : undefined,
  description: object.Description
    ? object.Description.map((description: any) =>
        parseDescriptionWithTerritory(description),
      )
    : undefined,
  technicalDetails: object.TechnicalDetails
    ? object.TechnicalDetails.map((technicalDetails: any) =>
        parseTechnicalImageDetails(technicalDetails),
      )
    : undefined,
});
