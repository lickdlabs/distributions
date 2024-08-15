import { Ern382 } from "../../../../../types";
import { convertDurationToMilliseconds } from "../../../../../utils";
import { parseAllTerritoryCode } from "./allTerritoryCode";
import { parseDescription } from "./description";
import { parseEventDate } from "./eventDate";
import { parseMusicalWorkId } from "./musicalWorkId";
import { parseReferenceTitle } from "./referenceTitle";
import { parseResourceContainedResourceReferenceList } from "./resourceContainedResourceReferenceList";
import { parseResourceMusicalWorkReferenceList } from "./resourceMusicalWorkReferenceList";
import { parseRightsAgreementId } from "./rightsAgreementId";
import { parseSoundRecordingCollectionReferenceList } from "./soundRecordingCollectionReferenceList";
import { parseSoundRecordingDetailsByTerritory } from "./soundRecordingDetailsByTerritory";
import { parseSoundRecordingId } from "./soundRecordingId";
import { parseSoundRecordingType } from "./soundRecordingType";

export const parseSoundRecording = (object: any): Ern382.SoundRecording => ({
  _attributes: object.$
    ? {
        isUpdated: object.$.IsUpdated
          ? object.$.IsUpdated === "true"
          : undefined,
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  soundRecordingType: object.SoundRecordingType
    ? parseSoundRecordingType(object.SoundRecordingType[0])
    : undefined,
  isArtistRelated: object.IsArtistRelated
    ? object.IsArtistRelated[0] === "true"
    : undefined,
  soundRecordingId: object.SoundRecordingId.map((soundRecordingId: any) =>
    parseSoundRecordingId(soundRecordingId),
  ),
  indirectSoundRecordingId: object.IndirectSoundRecordingId
    ? object.IndirectSoundRecordingId.map((indirectSoundRecordingId: any) =>
        parseMusicalWorkId(indirectSoundRecordingId),
      )
    : undefined,
  resourceReference: object.ResourceReference[0],
  referenceTitle: parseReferenceTitle(object.ReferenceTitle[0]),
  instrumentationDescription: object.InstrumentationDescription
    ? parseDescription(object.InstrumentationDescription[0])
    : undefined,
  isMedley: object.IsMedley ? object.IsMedley[0] === "true" : undefined,
  isPotpourri: object.IsPotpourri
    ? object.IsPotpourri[0] === "true"
    : undefined,
  isInstrumental: object.IsInstrumental
    ? object.IsInstrumental[0] === "true"
    : undefined,
  isBackground: object.IsBackground
    ? object.IsBackground[0] === "true"
    : undefined,
  isHiddenResource: object.IsHiddenResource
    ? object.IsHiddenResource[0] === "true"
    : undefined,
  isBonusResource: object.IsBonusResource
    ? object.IsBonusResource[0] === "true"
    : undefined,
  hasPreOrderFulfillment: object.HasPreOrderFulfillment
    ? object.HasPreOrderFulfillment[0] === "true"
    : undefined,
  isComputerGenerated: object.IsComputerGenerated
    ? object.IsComputerGenerated[0] === "true"
    : undefined,
  isRemastered: object.IsRemastered
    ? object.IsRemastered[0] === "true"
    : undefined,
  noSilenceBefore: object.NoSilenceBefore
    ? object.NoSilenceBefore[0] === "true"
    : undefined,
  noSilenceAfter: object.NoSilenceAfter
    ? object.NoSilenceAfter[0] === "true"
    : undefined,
  performerInformationRequired: object.PerformerInformationRequired
    ? object.PerformerInformationRequired[0] === "true"
    : undefined,
  languageOfPerformance: object.LanguageOfPerformance
    ? object.LanguageOfPerformance[0]
    : undefined,
  duration: convertDurationToMilliseconds(object.Duration[0]),
  rightsAgreementId: object.RightsAgreementId
    ? parseRightsAgreementId(object.RightsAgreementId[0])
    : undefined,
  soundRecordingCollectionReferenceList:
    object.SoundRecordingCollectionReferenceList
      ? parseSoundRecordingCollectionReferenceList(
          object.SoundRecordingCollectionReferenceList[0],
        )
      : undefined,
  resourceMusicalWorkReferenceList: object.ResourceMusicalWorkReferenceList
    ? parseResourceMusicalWorkReferenceList(
        object.ResourceMusicalWorkReferenceList[0],
      )
    : undefined,
  resourceContainedResourceReferenceList:
    object.ResourceContainedResourceReferenceList
      ? parseResourceContainedResourceReferenceList(
          object.ResourceContainedResourceReferenceList[0],
        )
      : undefined,
  creationDate: object.CreationDate
    ? parseEventDate(object.CreationDate[0])
    : undefined,
  masteredDate: object.MasteredDate
    ? parseEventDate(object.MasteredDate[0])
    : undefined,
  remasteredDate: object.RemasteredDate
    ? parseEventDate(object.RemasteredDate[0])
    : undefined,
  soundRecordingDetailsByTerritory: object.SoundRecordingDetailsByTerritory.map(
    (soundRecordingDetailsByTerritory: any) =>
      parseSoundRecordingDetailsByTerritory(soundRecordingDetailsByTerritory),
  ),
  territoryOfCommissioning: object.TerritoryOfCommissioning
    ? parseAllTerritoryCode(object.TerritoryOfCommissioning[0])
    : undefined,
  numberOfFeaturedArtists: object.NumberOfFeaturedArtists
    ? parseInt(object.NumberOfFeaturedArtists[0])
    : undefined,
  numberOfNonFeaturedArtists: object.NumberOfNonFeaturedArtists
    ? parseInt(object.NumberOfNonFeaturedArtists[0])
    : undefined,
  numberOfContractedArtists: object.NumberOfContractedArtists
    ? parseInt(object.NumberOfContractedArtists[0])
    : undefined,
  numberOfNonContractedArtists: object.NumberOfNonContractedArtists
    ? parseInt(object.NumberOfNonContractedArtists[0])
    : undefined,
});
