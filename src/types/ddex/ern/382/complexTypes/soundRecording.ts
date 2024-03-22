import { Duration } from "../../../../xml";
import { ReferenceTitle } from "./referenceTitle";
import { SoundRecordingDetailsByTerritory } from "./soundRecordingDetailsByTerritory";
import { SoundRecordingId } from "./soundRecordingId";

// <xs:complexType name="SoundRecording">
//   <xs:sequence>
//     <xs:element name="SoundRecordingType" minOccurs="0" type="ern:SoundRecordingType" />
//     <xs:element name="IsArtistRelated" minOccurs="0" type="xs:boolean" />
//     <xs:element name="SoundRecordingId" maxOccurs="unbounded" type="ern:SoundRecordingId" />
//     <xs:element name="IndirectSoundRecordingId" minOccurs="0" maxOccurs="unbounded" type="ern:MusicalWorkId" />
//     <xs:element name="ResourceReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:ID">
//             <xs:pattern value="A[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="ReferenceTitle" type="ern:ReferenceTitle" />
//     <xs:element name="InstrumentationDescription" minOccurs="0" type="ern:Description" />
//     <xs:element name="IsMedley" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsPotpourri" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsInstrumental" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsBackground" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsHiddenResource" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsBonusResource" minOccurs="0" type="xs:boolean" />
//     <xs:element name="HasPreOrderFulfillment" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsComputerGenerated" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsRemastered" minOccurs="0" type="xs:boolean" />
//     <xs:element name="NoSilenceBefore" minOccurs="0" type="xs:boolean" />
//     <xs:element name="NoSilenceAfter" minOccurs="0" type="xs:boolean" />
//     <xs:element name="PerformerInformationRequired" minOccurs="0" type="xs:boolean" />
//     <xs:element name="LanguageOfPerformance" minOccurs="0" type="avs:IsoLanguageCode" />
//     <xs:element name="Duration" type="xs:duration" />
//     <xs:element name="RightsAgreementId" minOccurs="0" type="ern:RightsAgreementId" />
//     <xs:element name="SoundRecordingCollectionReferenceList" minOccurs="0" type="ern:SoundRecordingCollectionReferenceList" />
//     <xs:element name="ResourceMusicalWorkReferenceList" minOccurs="0" type="ern:ResourceMusicalWorkReferenceList" />
//     <xs:element name="ResourceContainedResourceReferenceList" minOccurs="0" type="ern:ResourceContainedResourceReferenceList" />
//     <xs:element name="CreationDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="MasteredDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="RemasteredDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="SoundRecordingDetailsByTerritory" maxOccurs="unbounded" type="ern:SoundRecordingDetailsByTerritory" />
//     <xs:element name="TerritoryOfCommissioning" minOccurs="0" type="ern:AllTerritoryCode" />
//     <xs:element name="NumberOfFeaturedArtists" minOccurs="0" type="xs:integer" />
//     <xs:element name="NumberOfNonFeaturedArtists" minOccurs="0" type="xs:integer" />
//     <xs:element name="NumberOfContractedArtists" minOccurs="0" type="xs:integer" />
//     <xs:element name="NumberOfNonContractedArtists" minOccurs="0" type="xs:integer" />
//   </xs:sequence>
//   <xs:attribute name="IsUpdated" type="xs:boolean" />
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type SoundRecording = {
  _attributes?: {
    isUpdated?: boolean;
    languageAndScriptCode?: string;
  };

  // @todo <xs:element name="SoundRecordingType" minOccurs="0" type="ern:SoundRecordingType" />
  // @todo <xs:element name="IsArtistRelated" minOccurs="0" type="xs:boolean" />
  soundRecordingId: SoundRecordingId[];
  // @todo <xs:element name="IndirectSoundRecordingId" minOccurs="0" maxOccurs="unbounded" type="ern:MusicalWorkId" />
  resourceReference: `${string & { __brand: "A[\\d\\-_a-zA-Z]+" }}`;
  referenceTitle: ReferenceTitle;
  // @todo <xs:element name="InstrumentationDescription" minOccurs="0" type="ern:Description" />
  // @todo <xs:element name="IsMedley" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="IsPotpourri" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="IsInstrumental" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="IsBackground" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="IsHiddenResource" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="IsBonusResource" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="HasPreOrderFulfillment" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="IsComputerGenerated" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="IsRemastered" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="NoSilenceBefore" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="NoSilenceAfter" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="PerformerInformationRequired" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="LanguageOfPerformance" minOccurs="0" type="avs:IsoLanguageCode" />
  duration: Duration;
  // @todo <xs:element name="RightsAgreementId" minOccurs="0" type="ern:RightsAgreementId" />
  // @todo <xs:element name="SoundRecordingCollectionReferenceList" minOccurs="0" type="ern:SoundRecordingCollectionReferenceList" />
  // @todo <xs:element name="ResourceMusicalWorkReferenceList" minOccurs="0" type="ern:ResourceMusicalWorkReferenceList" />
  // @todo <xs:element name="ResourceContainedResourceReferenceList" minOccurs="0" type="ern:ResourceContainedResourceReferenceList" />
  // @todo <xs:element name="CreationDate" minOccurs="0" type="ern:EventDate" />
  // @todo <xs:element name="MasteredDate" minOccurs="0" type="ern:EventDate" />
  // @todo <xs:element name="RemasteredDate" minOccurs="0" type="ern:EventDate" />
  soundRecordingDetailsByTerritory: SoundRecordingDetailsByTerritory[];
  // @todo <xs:element name="TerritoryOfCommissioning" minOccurs="0" type="ern:AllTerritoryCode" />
  // @todo <xs:element name="NumberOfFeaturedArtists" minOccurs="0" type="xs:integer" />
  // @todo <xs:element name="NumberOfNonFeaturedArtists" minOccurs="0" type="xs:integer" />
  // @todo <xs:element name="NumberOfContractedArtists" minOccurs="0" type="xs:integer" />
  // @todo <xs:element name="NumberOfNonContractedArtists" minOccurs="0" type="xs:integer" />
};
