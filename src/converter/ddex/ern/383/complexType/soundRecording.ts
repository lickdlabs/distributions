import { Avs411, Ern383, Ern411 } from "../../../../../types";
import { findUnique } from "../../../../../utils";
import {
  convertContributor,
  convertContributorFromIndirectResourceContributor,
} from "./contributor";
import { convertCourtesyLineWithDefault } from "./courtesyLineWithDefault";
import { convertDisplayArtistFromArtist } from "./displayArtist";
import { convertDisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { convertEventDateWithoutFlags } from "./eventDateWithoutFlags";
import { convertMusicalWorkId } from "./musicalWorkId";
import { convertParentalWarningTypeWithTerritory } from "./parentalWarningTypeWithTerritory";
import { convertPLineWithDefault } from "./pLineWithDefault";
import { convertResourceRightsController } from "./resourceRightsController";
import { convertSoundRecordingType } from "./soundRecordingType";
import { convertTechnicalSoundRecordingDetails } from "./technicalSoundRecordingDetails";

export const convertSoundRecording = (
  parties: Ern411.Party[],
  soundRecording: Ern383.SoundRecording,
  territory: Ern383.SoundRecordingDetailsByTerritory,
): Ern411.SoundRecording => ({
  _attributes: soundRecording._attributes
    ? {
        languageAndScriptCode: soundRecording._attributes.languageAndScriptCode,
        isSupplemental: undefined,
      }
    : undefined,
  resourceReference: soundRecording.resourceReference,
  type: soundRecording.soundRecordingType
    ? convertSoundRecordingType(soundRecording.soundRecordingType)
    : {
        value: Avs411.SoundRecordingType.UNKNOWN,
      },
  resourceId: soundRecording.soundRecordingId,
  workId: soundRecording.indirectSoundRecordingId?.map((workId) =>
    convertMusicalWorkId(workId),
  ),
  displayTitleText: [
    {
      value: soundRecording.referenceTitle.titleText.value,
    },
  ],
  displayTitle: [
    {
      titleText: soundRecording.referenceTitle.titleText.value,
    },
  ],
  additionalTitle: undefined,
  versionType: undefined,
  displayArtistName:
    territory.displayArtistName?.map((displayArtistName) =>
      convertDisplayArtistNameWithDefault(displayArtistName),
    ) || [],
  displayArtist:
    territory.displayArtist?.map((displayArtist) =>
      convertDisplayArtistFromArtist(parties, displayArtist),
    ) || [],
  contributor:
    territory.resourceContributor || territory.indirectResourceContributor
      ? findUnique([
          ...(territory.resourceContributor?.map((contributor) =>
            convertContributor(parties, contributor),
          ) || []),
          ...(territory.indirectResourceContributor?.map((contributor) =>
            convertContributorFromIndirectResourceContributor(
              parties,
              contributor,
            ),
          ) || []),
        ])
      : undefined,
  character: undefined,
  resourceRightsController: territory.rightsController?.map(
    (resourceRightsController) =>
      convertResourceRightsController(parties, resourceRightsController),
  ),
  workRightsController: undefined,
  pLine: territory.pLine?.map((pLine) => convertPLineWithDefault(pLine)),
  courtesyLine: territory.courtesyLine
    ? [convertCourtesyLineWithDefault(territory.courtesyLine)]
    : undefined,
  duration: soundRecording.duration,
  creationDate: soundRecording.creationDate
    ? convertEventDateWithoutFlags(soundRecording.creationDate)
    : undefined,
  masteredDate: soundRecording.masteredDate
    ? convertEventDateWithoutFlags(soundRecording.masteredDate)
    : undefined,
  remasteredDate: soundRecording.remasteredDate
    ? convertEventDateWithoutFlags(soundRecording.remasteredDate)
    : undefined,
  firstPublicationDate: undefined,
  parentalWarningType: territory?.parentalWarningType
    ? territory.parentalWarningType.map((parentalWarningType) =>
        convertParentalWarningTypeWithTerritory(parentalWarningType),
      )
    : [],
  relatedRelease: undefined,
  relatedResource: undefined,
  compositeMusicalWorkType: undefined,
  isCover: undefined,
  isInstrumental: soundRecording.isInstrumental,
  containsHiddenContent: undefined,
  isRemastered: soundRecording.isRemastered,
  isHiResMusic: undefined,
  displayCredits: undefined,
  languageOfPerformance: soundRecording.languageOfPerformance
    ? (soundRecording.languageOfPerformance as unknown as Avs411.IsoLanguageCode)
    : undefined,
  audioChannelConfiguration: undefined,
  technicalDetails: soundRecording.soundRecordingDetailsByTerritory[0]
    .technicalSoundRecordingDetails
    ? soundRecording.soundRecordingDetailsByTerritory[0].technicalSoundRecordingDetails.map(
        (technicalSoundRecordingDetails) =>
          convertTechnicalSoundRecordingDetails(technicalSoundRecordingDetails),
      )
    : undefined,
  raga: undefined,
  tala: undefined,
  deity: undefined,
  audioChapterReference: undefined,
});
