import { Ern383 } from "../../../../../types";
import { parseCLine } from "./cLine";
import { parseCourtesyLine } from "./courtesyLine";
import { parseDescription } from "./description";
import { parseDetailedResourceContributor } from "./detailedResourceContributor";
import { parseEventDate } from "./eventDate";
import { parseFulfillmentDate } from "./fulfillmentDate";
import { parseGenre } from "./genre";
import { parseIndirectResourceContributor } from "./indirectResourceContributor";
import { parseKeywords } from "./keywords";
import { parseName } from "./name";
import { parseParentalWarningType } from "./parentalWarningType";
import { parseSynopsis } from "./synopsis";
import { parseTechnicalImageDetails } from "./technicalImageDetails";
import { parseTerritoryCodeChoice } from "./territoryCodeChoice";
import { parseTitle } from "./title";

export const parseImageDetailsByTerritory = (
  object: any,
): Ern383.ImageDetailsByTerritory => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  ...parseTerritoryCodeChoice(object),
  title: object.Title
    ? object.Title.map((title: any) => parseTitle(title))
    : undefined,
  resourceContributor: object.ResourceContributor
    ? object.ResourceContributor.map((resourceContributor: any) =>
        parseDetailedResourceContributor(resourceContributor),
      )
    : undefined,
  indirectResourceContributor: object.IndirectResourceContributor
    ? object.IndirectResourceContributor.map(
        (indirectResourceContributor: any) =>
          parseIndirectResourceContributor(indirectResourceContributor),
      )
    : undefined,
  displayArtistName: object.DisplayArtistName
    ? object.DisplayArtistName.map((displayArtistName: any) =>
        parseName(displayArtistName),
      )
    : undefined,
  cLine: object.CLine
    ? object.CLine.map((cLine: any) => parseCLine(cLine))
    : undefined,
  description: object.Description
    ? parseDescription(object.Description[0])
    : undefined,
  courtesyLine: object.CourtesyLine
    ? parseCourtesyLine(object.CourtesyLine[0])
    : undefined,
  resourceReleaseDate: object.ResourceReleaseDate
    ? parseEventDate(object.ResourceReleaseDate[0])
    : undefined,
  originalResourceReleaseDate: object.OriginalResourceReleaseDate
    ? parseEventDate(object.OriginalResourceReleaseDate[0])
    : undefined,
  fulfillmentDate: object.FulfillmentDate
    ? parseFulfillmentDate(object.FulfillmentDate[0])
    : undefined,
  keywords: object.Keywords
    ? object.Keywords.map((keywords: any) => parseKeywords(keywords))
    : undefined,
  synopsis: object.Synopsis ? parseSynopsis(object.Synopsis[0]) : undefined,
  genre: object.Genre
    ? object.Genre.map((genre: any) => parseGenre(genre))
    : undefined,
  parentalWarningType: object.ParentalWarningType
    ? object.ParentalWarningType.map((parentalWarningType: any) =>
        parseParentalWarningType(parentalWarningType),
      )
    : undefined,
  technicalImageDetails: object.TechnicalImageDetails
    ? object.TechnicalImageDetails.map((technicalImageDetails: any) =>
        parseTechnicalImageDetails(technicalImageDetails),
      )
    : undefined,
});
