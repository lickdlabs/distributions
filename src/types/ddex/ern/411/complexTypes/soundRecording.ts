import { Duration } from "../../../../xml";
import { DisplayArtist } from "./displayArtist";
import { DisplayArtistNameWithDefault } from "./displayArtistNameWithDefault";
import { DisplayTitle } from "./displayTitle";
import { DisplayTitleText } from "./displayTitleText";
import { ParentalWarningTypeWithTerritory } from "./parentalWarningTypeWithTerritory";
import { SoundRecordingId } from "./soundRecordingId";
import { SoundRecordingType } from "./soundRecordingType";

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
  // @todo <xs:element name="WorkId" minOccurs="0" maxOccurs="unbounded" type="ern:MusicalWorkId" />
  displayTitleText: DisplayTitleText[];
  displayTitle: DisplayTitle[];
  // @todo <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
  // @todo <xs:element name="VersionType" minOccurs="0" maxOccurs="unbounded" type="ern:VersionType" />
  displayArtistName: DisplayArtistNameWithDefault[];
  displayArtist: DisplayArtist[];
  // @todo <xs:element name="Contributor" minOccurs="0" maxOccurs="unbounded" type="ern:Contributor" />
  // @todo <xs:element name="Character" minOccurs="0" maxOccurs="unbounded" type="ern:Character" />
  // @todo <xs:element name="ResourceRightsController" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceRightsController" />
  // @todo <xs:element name="WorkRightsController" minOccurs="0" maxOccurs="unbounded" type="ern:WorkRightsController" />
  // @todo <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLineWithDefault" />
  // @todo <xs:element name="CourtesyLine" minOccurs="0" maxOccurs="unbounded" type="ern:CourtesyLineWithDefault" />
  duration: Duration;
  // @todo <xs:element name="CreationDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
  // @todo <xs:element name="MasteredDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
  // @todo <xs:element name="RemasteredDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
  // @todo <xs:element name="FirstPublicationDate" minOccurs="0" maxOccurs="unbounded" type="ern:FirstPublicationDate" />
  parentalWarningType: ParentalWarningTypeWithTerritory[];
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
  // @todo <xs:element name="TechnicalDetails" minOccurs="0" maxOccurs="unbounded" type="ern:TechnicalSoundRecordingDetails" />
  // @todo <xs:element name="Raga" minOccurs="0" maxOccurs="unbounded" type="ern:Raga" />
  // @todo <xs:element name="Tala" minOccurs="0" maxOccurs="unbounded" type="ern:Tala" />
  // @todo <xs:element name="Deity" minOccurs="0" maxOccurs="unbounded" type="ern:Deity" />
  // @todo <xs:element name="AudioChapterReference" minOccurs="0" maxOccurs="unbounded" />
};
