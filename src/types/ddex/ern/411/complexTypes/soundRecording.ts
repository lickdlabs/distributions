import { Avs411 } from "../../../avs";
import { AdditionalTitle } from "./additionalTitle";
import { Character } from "./character";
import { Contributor } from "./contributor";
import { CourtesyLineWithDefault } from "./courtesyLineWithDefault";
import { Deity } from "./deity";
import { DisplayArtist } from "./displayArtist";
import { DisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { DisplayCredits } from "./displayCredits";
import { DisplayTitle } from "./displayTitle";
import { DisplayTitleText } from "./displayTitleText";
import { EventDateWithoutFlags } from "./eventDateWithoutFlags";
import { FirstPublicationDate } from "./firstPublicationDate";
import { MusicalWorkId } from "./musicalWorkId";
import { ParentalWarningTypeWithTerritory } from "./parentalWarningTypeWithTerritory";
import { PLineWithDefault } from "./pLineWithDefault";
import { Raga } from "./raga";
import { RelatedRelease } from "./relatedRelease";
import { RelatedResource } from "./relatedResource";
import { ResourceRightsController } from "./resourceRightsController";
import { SoundRecordingId } from "./soundRecordingId";
import { SoundRecordingType } from "./soundRecordingType";
import { Tala } from "./tala";
import { TechnicalSoundRecordingDetails } from "./technicalSoundRecordingDetails";
import { VersionType } from "./versionType";
import { WorkRightsController } from "./workRightsController";

// <xs:complexType name="SoundRecording">
//   <xs:sequence>
//     <xs:element name="ResourceReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:ID">
//             <xs:pattern value="A[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="Type" type="ern:SoundRecordingType" />
//     <xs:element name="ResourceId" maxOccurs="unbounded" type="ern:SoundRecordingId" />
//     <xs:element name="WorkId" minOccurs="0" maxOccurs="unbounded" type="ern:MusicalWorkId" />
//     <xs:element name="DisplayTitleText" maxOccurs="unbounded" type="ern:DisplayTitleText" />
//     <xs:element name="DisplayTitle" maxOccurs="unbounded" type="ern:DisplayTitle" />
//     <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
//     <xs:element name="VersionType" minOccurs="0" maxOccurs="unbounded" type="ern:VersionType" />
//     <xs:element name="DisplayArtistName" maxOccurs="unbounded" type="ern:DisplayArtistNameWithDefault" />
//     <xs:element name="DisplayArtist" maxOccurs="unbounded" type="ern:DisplayArtist" />
//     <xs:element name="Contributor" minOccurs="0" maxOccurs="unbounded" type="ern:Contributor" />
//     <xs:element name="Character" minOccurs="0" maxOccurs="unbounded" type="ern:Character" />
//     <xs:element name="ResourceRightsController" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceRightsController" />
//     <xs:element name="WorkRightsController" minOccurs="0" maxOccurs="unbounded" type="ern:WorkRightsController" />
//     <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLineWithDefault" />
//     <xs:element name="CourtesyLine" minOccurs="0" maxOccurs="unbounded" type="ern:CourtesyLineWithDefault" />
//     <xs:element name="Duration" type="xs:duration" />
//     <xs:element name="CreationDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
//     <xs:element name="MasteredDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
//     <xs:element name="RemasteredDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
//     <xs:element name="FirstPublicationDate" minOccurs="0" maxOccurs="unbounded" type="ern:FirstPublicationDate" />
//     <xs:element name="ParentalWarningType" maxOccurs="unbounded" type="ern:ParentalWarningTypeWithTerritory" />
//     <xs:element name="RelatedRelease" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedRelease" />
//     <xs:element name="RelatedResource" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedResource" />
//     <xs:element name="CompositeMusicalWorkType" minOccurs="0" type="avs:CompositeMusicalWorkType" />
//     <xs:element name="IsCover" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsInstrumental" minOccurs="0" type="xs:boolean" />
//     <xs:element name="ContainsHiddenContent" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsRemastered" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsHiResMusic" minOccurs="0" type="xs:boolean" />
//     <xs:element name="DisplayCredits" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayCredits" />
//     <xs:element name="LanguageOfPerformance" minOccurs="0" maxOccurs="unbounded" type="avs:IsoLanguageCode" />
//     <xs:element name="AudioChannelConfiguration" minOccurs="0" type="avs:RecordingMode" />
//     <xs:element name="TechnicalDetails" minOccurs="0" maxOccurs="unbounded" type="ern:TechnicalSoundRecordingDetails" />
//     <xs:element name="Raga" minOccurs="0" maxOccurs="unbounded" type="ern:Raga" />
//     <xs:element name="Tala" minOccurs="0" maxOccurs="unbounded" type="ern:Tala" />
//     <xs:element name="Deity" minOccurs="0" maxOccurs="unbounded" type="ern:Deity" />
//     <xs:element name="AudioChapterReference" minOccurs="0" maxOccurs="unbounded">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//             <xs:pattern value="X[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   <xs:attribute name="IsSupplemental" type="xs:boolean" />
// </xs:complexType>
export type SoundRecording = {
  _attributes?: {
    languageAndScriptCode?: string;
    isSupplemental?: boolean;
  };

  resourceReference: `${string & { __brand: "A[\\d\\-_a-zA-Z]+" }}`;
  type: SoundRecordingType;
  resourceId: SoundRecordingId[];
  workId?: MusicalWorkId[];
  displayTitleText: DisplayTitleText[];
  displayTitle: DisplayTitle[];
  additionalTitle?: AdditionalTitle[];
  versionType?: VersionType[];
  displayArtistName: DisplayArtistNameWithDefault[];
  displayArtist: DisplayArtist[];
  contributor?: Contributor[];
  character?: Character[];
  resourceRightsController?: ResourceRightsController[];
  workRightsController?: WorkRightsController[];
  pLine?: PLineWithDefault[];
  courtesyLine?: CourtesyLineWithDefault[];
  duration: number;
  creationDate?: EventDateWithoutFlags;
  masteredDate?: EventDateWithoutFlags;
  remasteredDate?: EventDateWithoutFlags;
  firstPublicationDate?: FirstPublicationDate[];
  parentalWarningType: ParentalWarningTypeWithTerritory[];
  relatedRelease?: RelatedRelease[];
  relatedResource?: RelatedResource[];
  compositeMusicalWorkType?: Avs411.CompositeMusicalWorkType;
  isCover?: boolean;
  isInstrumental?: boolean;
  containsHiddenContent?: boolean;
  isRemastered?: boolean;
  isHiResMusic?: boolean;
  displayCredits?: DisplayCredits[];
  LanguageOfPerformance?: Avs411.IsoLanguageCode;
  AudioChannelConfiguration?: Avs411.RecordingMode;
  technicalDetails?: TechnicalSoundRecordingDetails[];
  raga?: Raga[];
  tala?: Tala[];
  deity?: Deity[];
  audioChapterReference?: `${string & { __brand: "X[\\d\\-_a-zA-Z]+" }}`[];
};
