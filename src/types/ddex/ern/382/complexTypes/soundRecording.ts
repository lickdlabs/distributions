import { Avs20161006 } from "../../../avs";
import { ResourceReference } from "../references";
import { AllTerritoryCode } from "./allTerritoryCode";
import { Description } from "./description";
import { EventDate } from "./eventDate";
import { MusicalWorkId } from "./musicalWorkId";
import { ReferenceTitle } from "./referenceTitle";
import { ResourceContainedResourceReferenceList } from "./resourceContainedResourceReferenceList";
import { ResourceMusicalWorkReferenceList } from "./resourceMusicalWorkReferenceList";
import { RightsAgreementId } from "./rightsAgreementId";
import { SoundRecordingCollectionReferenceList } from "./soundRecordingCollectionReferenceList";
import { SoundRecordingDetailsByTerritory } from "./soundRecordingDetailsByTerritory";
import { SoundRecordingId } from "./soundRecordingId";
import { SoundRecordingType } from "./soundRecordingType";

// <xs:complexType name="SoundRecording">
//   <xs:sequence>
//     <xs:element name="SoundRecordingType" minOccurs="0" type="ern:SoundRecordingType" />
//     <xs:element name="IsArtistRelated" minOccurs="0" type="xs:boolean" />
//     <xs:element name="SoundRecordingId" maxOccurs="unbounded" type="ern:SoundRecordingId" />
//     <xs:element name="IndirectSoundRecordingId" minOccurs="0" maxOccurs="unbounded" type="ern:MusicalWorkId" />
//     <xs:element name="ResourceReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:ID">
//           <xs:pattern value="A[\d\-_a-zA-Z]+" />
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

  soundRecordingType?: SoundRecordingType;
  isArtistRelated?: boolean;
  soundRecordingId: SoundRecordingId[];
  indirectSoundRecordingId?: MusicalWorkId[];
  resourceReference: ResourceReference;
  referenceTitle: ReferenceTitle;
  instrumentationDescription?: Description;
  isMedley?: boolean;
  isPotpourri?: boolean;
  isInstrumental?: boolean;
  isBackground?: boolean;
  isHiddenResource?: boolean;
  isBonusResource?: boolean;
  hasPreOrderFulfillment?: boolean;
  isComputerGenerated?: boolean;
  isRemastered?: boolean;
  noSilenceBefore?: boolean;
  noSilenceAfter?: boolean;
  performerInformationRequired?: boolean;
  languageOfPerformance?: Avs20161006.LanguageOfPerformance;
  duration: number;
  rightsAgreementId?: RightsAgreementId;
  soundRecordingCollectionReferenceList?: SoundRecordingCollectionReferenceList;
  resourceMusicalWorkReferenceList?: ResourceMusicalWorkReferenceList;
  resourceContainedResourceReferenceList?: ResourceContainedResourceReferenceList;
  creationDate?: EventDate;
  masteredDate?: EventDate;
  remasteredDate?: EventDate;
  soundRecordingDetailsByTerritory: SoundRecordingDetailsByTerritory[];
  territoryOfCommissioning?: AllTerritoryCode;
  numberOfFeaturedArtists?: number;
  numberOfNonFeaturedArtists?: number;
  numberOfContractedArtists?: number;
  numberOfNonContractedArtists?: number;
};
