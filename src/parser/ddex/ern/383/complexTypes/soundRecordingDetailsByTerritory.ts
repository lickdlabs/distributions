import { Ern383 } from "../../../../../types";
import { parseArtist } from "./artist";
import { parseAvRating } from "./avRating";
import { parseComment } from "./comment";
import { parseCourtesyLine } from "./courtesyLine";
import { parseDetailedResourceContributor } from "./detailedResourceContributor";
import { parseEventDate } from "./eventDate";
import { parseFulfillmentDate } from "./fulfillmentDate";
import { parseGenre } from "./genre";
import { parseHostSoundCarrier } from "./hostSoundCarrier";
import { parseIndirectResourceContributor } from "./indirectResourceContributor";
import { parseKeywords } from "./keywords";
import { parseLabelName } from "./labelName";
import { parseName } from "./name";
import { parseParentalWarningType } from "./parentalWarningType";
import { parsePLine } from "./pLine";
import { parseRightsAgreementId } from "./rightsAgreementId";
import { parseSynopsis } from "./synopsis";
import { parseTechnicalSoundRecordingDetails } from "./technicalSoundRecordingDetails";
import { parseTerritoryCodeChoice } from "./territoryCodeChoice";
import { parseTitle } from "./title";
import { parseTypedRightsController } from "./typedRightsController";

export const parseSoundRecordingDetailsByTerritory = (
  object: any,
): Ern383.SoundRecordingDetailsByTerritory => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  ...parseTerritoryCodeChoice(object),
  title: object.Title
    ? object.Title.map((title: any) => parseTitle(title))
    : undefined,
  displayArtist: object.DisplayArtist
    ? object.DisplayArtist.map((displayArtist: any) =>
        parseArtist(displayArtist),
      )
    : undefined,
  displayConductor: object.DisplayConductor
    ? object.DisplayConductor.map((displayConductor: any) =>
        parseArtist(displayConductor),
      )
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
  rightsAgreementId: object.RightsAgreementId
    ? parseRightsAgreementId(object.RightsAgreementId[0])
    : undefined,
  displayArtistName: object.DisplayArtistName
    ? object.DisplayArtistName.map((displayArtistName: any) =>
        parseName(displayArtistName),
      )
    : undefined,
  labelName: object.LabelName
    ? object.LabelName.map((labelName: any) => parseLabelName(labelName))
    : undefined,
  rightsController: object.RightsController
    ? object.RightsController.map((rightsController: any) =>
        parseTypedRightsController(rightsController),
      )
    : undefined,
  remasteredDate: object.RemasteredDate
    ? parseEventDate(object.RemasteredDate[0])
    : undefined,
  resourceReleaseDate: object.ResourceReleaseDate
    ? parseEventDate(object.ResourceReleaseDate[0])
    : undefined,
  originalResourceReleaseDate: object.OriginalResourceReleaseDate
    ? parseEventDate(object.OriginalResourceReleaseDate[0])
    : undefined,
  pLine: object.PLine
    ? object.PLine.map((pLine: any) => parsePLine(pLine))
    : undefined,
  courtesyLine: object.CourtesyLine
    ? parseCourtesyLine(object.CourtesyLine[0])
    : undefined,
  sequenceNumber: object.SequenceNumber
    ? parseInt(object.SequenceNumber[0])
    : undefined,
  hostSoundCarrier: object.HostSoundCarrier
    ? object.HostSoundCarrier.map((hostSoundCarrier: any) =>
        parseHostSoundCarrier(hostSoundCarrier),
      )
    : undefined,
  marketingComment: object.MarketingComment
    ? parseComment(object.MarketingComment[0])
    : undefined,
  genre: object.Genre
    ? object.Genre.map((genre: any) => parseGenre(genre))
    : undefined,
  parentalWarningType: object.ParentalWarningType
    ? object.ParentalWarningType.map((parentalWarningType: any) =>
        parseParentalWarningType(parentalWarningType),
      )
    : undefined,
  avRating: object.AvRating
    ? object.AvRating.map((avRating: any) => parseAvRating(avRating))
    : undefined,
  technicalSoundRecordingDetails: object.TechnicalSoundRecordingDetails
    ? object.TechnicalSoundRecordingDetails.map(
        (technicalSoundRecordingDetails: any) =>
          parseTechnicalSoundRecordingDetails(technicalSoundRecordingDetails),
      )
    : undefined,
  fulfillmentDate: object.FulfillmentDate
    ? parseFulfillmentDate(object.FulfillmentDate[0])
    : undefined,
  keywords: object.Keywords
    ? object.Keywords.map((keywords: any) => parseKeywords(keywords))
    : undefined,
  synopsis: object.Synopsis ? parseSynopsis(object.Synopsis[0]) : undefined,
});
