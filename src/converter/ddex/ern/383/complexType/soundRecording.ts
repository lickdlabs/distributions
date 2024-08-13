import { Avs411, Ern383, Ern411 } from "../../../../../types";
import { convertTechnicalSoundRecordingDetails } from "./technicalSoundRecordingDetails";

export const convertSoundRecording = (
  ern: Ern383.SoundRecording,
): Ern411.SoundRecording => ({
  _attributes: ern._attributes
    ? {
        languageAndScriptCode: ern._attributes.languageAndScriptCode,
        isSupplemental: undefined,
      }
    : undefined,
  resourceReference: ern.resourceReference,
  type: {
    value: Avs411.SoundRecordingType.UNKNOWN,
  },
  resourceId: ern.soundRecordingId,
  // @todo <xs:element name="WorkId" minOccurs="0" maxOccurs="unbounded" type="ern:MusicalWorkId" />
  displayTitleText: [
    {
      value: ern.referenceTitle.titleText.value,
    },
  ],
  displayTitle: [
    {
      titleText: ern.referenceTitle.titleText.value,
    },
  ],
  // @todo <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
  // @todo <xs:element name="VersionType" minOccurs="0" maxOccurs="unbounded" type="ern:VersionType" />
  displayArtistName: [],
  displayArtist: [],
  // @todo <xs:element name="Contributor" minOccurs="0" maxOccurs="unbounded" type="ern:Contributor" />
  // @todo <xs:element name="Character" minOccurs="0" maxOccurs="unbounded" type="ern:Character" />
  // @todo <xs:element name="ResourceRightsController" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceRightsController" />
  // @todo <xs:element name="WorkRightsController" minOccurs="0" maxOccurs="unbounded" type="ern:WorkRightsController" />
  // @todo <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLineWithDefault" />
  // @todo <xs:element name="CourtesyLine" minOccurs="0" maxOccurs="unbounded" type="ern:CourtesyLineWithDefault" />
  duration: ern.duration,
  // @todo <xs:element name="CreationDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
  // @todo <xs:element name="MasteredDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
  // @todo <xs:element name="RemasteredDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
  // @todo <xs:element name="FirstPublicationDate" minOccurs="0" maxOccurs="unbounded" type="ern:FirstPublicationDate" />
  parentalWarningType: [
    {
      value: Avs411.ParentalWarningType.UNKNOWN,
    },
  ],
  // @todo <xs:element name="RelatedRelease" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedRelease" />
  // @todo <xs:element name="RelatedResource" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedResource" />
  // @todo <xs:element name="CompositeMusicalWorkType" minOccurs="0" type="avs:CompositeMusicalWorkType" />
  // @todo <xs:element name="IsCover" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="IsInstrumental" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="ContainsHiddenContent" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="IsRemastered" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="IsHiResMusic" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="DisplayCredits" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayCredits" />
  // @todo <xs:element name="LanguageOfPerformance" minOccurs="0" maxOccurs="unbounded" type="avs:IsoLanguageCode" />
  // @todo <xs:element name="AudioChannelConfiguration" minOccurs="0" type="avs:RecordingMode" />
  technicalDetails: ern.soundRecordingDetailsByTerritory[0]
    .technicalSoundRecordingDetails
    ? ern.soundRecordingDetailsByTerritory[0].technicalSoundRecordingDetails.map(
        (technicalSoundRecordingDetails) =>
          convertTechnicalSoundRecordingDetails(technicalSoundRecordingDetails),
      )
    : undefined,
  // @todo <xs:element name="Raga" minOccurs="0" maxOccurs="unbounded" type="ern:Raga" />
  // @todo <xs:element name="Tala" minOccurs="0" maxOccurs="unbounded" type="ern:Tala" />
  // @todo <xs:element name="Deity" minOccurs="0" maxOccurs="unbounded" type="ern:Deity" />
  // @todo <xs:element name="AudioChapterReference" minOccurs="0" maxOccurs="unbounded" />
});
