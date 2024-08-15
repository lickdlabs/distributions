import { Ern411 } from "../../../../../types";
import {
  convertDurationToMilliseconds,
  parseBoolean,
} from "../../../../../utils";
import { parseAdditionalTitle } from "./additionalTitle";
import { parseCharacter } from "./character";
import { parseContributor } from "./contributor";
import { parseCourtesyLineWithDefault } from "./courtesyLineWithDefault";
import { parseDeity } from "./deity";
import { parseDisplayArtist } from "./displayArtist";
import { parseDisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { parseDisplayCredits } from "./displayCredits";
import { parseDisplayTitle } from "./displayTitle";
import { parseDisplayTitleText } from "./displayTitleText";
import { parseEventDateWithoutFlags } from "./eventDateWithoutFlags";
import { parseFirstPublicationDate } from "./firstPublicationDate";
import { parseParentalWarningTypeWithTerritory } from "./parentalWarningTypeWithTerritory";
import { parsePLineWithDefault } from "./pLineWithDefault";
import { parseRaga } from "./raga";
import { parseRelatedRelease } from "./relatedRelease";
import { parseRelatedResource } from "./relatedResource";
import { parseResourceRightsController } from "./resourceRightsController";
import { parseSoundRecordingId } from "./soundRecordingId";
import { parseSoundRecordingType } from "./soundRecordingType";
import { parseTala } from "./tala";
import { parseTechnicalSoundRecordingDetails } from "./technicalSoundRecordingDetails";
import { parseVersionType } from "./versionType";

export const parseSoundRecording = (object: any): Ern411.SoundRecording => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        isSupplemental: object.$.IsSupplemental
          ? object.$.IsSupplemental === "true"
          : undefined,
      }
    : undefined,
  resourceReference: object.ResourceReference[0],
  type: parseSoundRecordingType(object.Type[0]),
  resourceId: object.ResourceId.map((resourceId: any) =>
    parseSoundRecordingId(resourceId),
  ),
  displayTitleText: object.DisplayTitleText.map((displayTitleText: any) =>
    parseDisplayTitleText(displayTitleText),
  ),
  displayTitle: object.DisplayTitle.map((displayTitle: any) =>
    parseDisplayTitle(displayTitle),
  ),
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
  displayArtistName: object.DisplayArtistName.map((displayArtistName: any) =>
    parseDisplayArtistNameWithDefault(displayArtistName),
  ),
  displayArtist: object.DisplayArtist.map((displayArtist: any) =>
    parseDisplayArtist(displayArtist),
  ),
  contributor: object.Contributor
    ? object.Contributor.map((contributor: any) =>
        parseContributor(contributor),
      )
    : undefined,
  character: object.Character
    ? object.Character.map((character: any) => parseCharacter(character))
    : undefined,
  resourceRightsController: object.ResourceRightsController
    ? object.ResourceRightsController.map((resourceRightsController: any) =>
        parseResourceRightsController(resourceRightsController),
      )
    : undefined,
  pLine: object.PLine
    ? object.PLine.map((pLine: any) => parsePLineWithDefault(pLine))
    : undefined,
  courtesyLine: object.CourtesyLine
    ? object.CourtesyLine.map((courtesyLine: any) =>
        parseCourtesyLineWithDefault(courtesyLine),
      )
    : undefined,
  duration: convertDurationToMilliseconds(object.Duration[0]),
  creationDate: object.CreationDate
    ? parseEventDateWithoutFlags(object.CreationDate[0])
    : undefined,
  masteredDate: object.MasteredDate
    ? parseEventDateWithoutFlags(object.MasteredDate[0])
    : undefined,
  remasteredDate: object.RemasteredDate
    ? parseEventDateWithoutFlags(object.RemasteredDate[0])
    : undefined,
  firstPublicationDate: object.FirstPublicationDate
    ? object.FirstPublicationDate.map((firstPublicationDate: any) =>
        parseFirstPublicationDate(firstPublicationDate),
      )
    : undefined,
  parentalWarningType: object.ParentalWarningType.map(
    (parentalWarningType: any) =>
      parseParentalWarningTypeWithTerritory(parentalWarningType),
  ),
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
  compositeMusicalWorkType: object.CompositeMusicalWorkType
    ? object.CompositeMusicalWorkType[0]
    : undefined,
  isCover: object.IsCover ? parseBoolean(object.IsCover[0]) : undefined,
  isInstrumental: object.IsInstrumental
    ? parseBoolean(object.IsInstrumental[0])
    : undefined,
  containsHiddenContent: object.ContainsHiddenContent
    ? parseBoolean(object.ContainsHiddenContent[0])
    : undefined,
  isRemastered: object.IsRemastered
    ? parseBoolean(object.IsRemastered[0])
    : undefined,
  isHiResMusic: object.IsHiResMusic
    ? parseBoolean(object.IsHiResMusic[0])
    : undefined,
  displayCredits: object.DisplayCredits
    ? object.DisplayCredits.map((displayCredits: any) =>
        parseDisplayCredits(displayCredits),
      )
    : undefined,
  languageOfPerformance: object.LanguageOfPerformance
    ? object.LanguageOfPerformance[0]
    : undefined,
  audioChannelConfiguration: object.AudioChannelConfiguration
    ? object.AudioChannelConfiguration[0]
    : undefined,
  technicalDetails: object.TechnicalDetails
    ? object.TechnicalDetails.map((technicalDetails: any) =>
        parseTechnicalSoundRecordingDetails(technicalDetails),
      )
    : undefined,
  raga: object.Raga
    ? object.Raga.map((raga: any) => parseRaga(raga))
    : undefined,
  tala: object.Tala
    ? object.Tala.map((tala: any) => parseTala(tala))
    : undefined,
  deity: object.Deity
    ? object.Deity.map((deity: any) => parseDeity(deity))
    : undefined,
  audioChapterReference: object.AudioChapterReference
    ? object.AudioChapterReference[0]
    : undefined,
});
