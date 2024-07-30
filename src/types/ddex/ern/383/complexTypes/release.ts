import { Avs20200108 } from "../../../avs";
import { CLine } from "./cLine";
import { EventDate } from "./eventDate";
import { PLine } from "./pLine";
import { ReferenceTitle } from "./referenceTitle";
import { ReleaseDetailsByTerritory } from "./releaseDetailsByTerritory";
import { ReleaseId } from "./releaseId";
import { ReleaseResourceReferenceList } from "./releaseResourceReferenceList";
import { ReleaseType } from "./releaseType";
import { ResourceOmissionReason } from "./resourceOmissionReason";
import { RightsAgreementId } from "./rightsAgreementId";

// <xs:complexType name="Release">
//   <xs:sequence>
//     <xs:element name="ReleaseId" maxOccurs="unbounded" type="ern:ReleaseId" />
//     <xs:element name="ReleaseReference" minOccurs="0" maxOccurs="unbounded">
//       <xs:simpleType>
//         <xs:restriction base="xs:ID">
//           <xs:pattern value="R[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="ExternalResourceLink" minOccurs="0" maxOccurs="unbounded" type="ern:ExternalResourceLink" />
//     <xs:element name="SalesReportingProxyReleaseId" minOccurs="0" maxOccurs="unbounded" type="ern:SalesReportingProxyReleaseId" />
//     <xs:element name="ReferenceTitle" type="ern:ReferenceTitle" />
//     <xs:choice>
//       <xs:element name="ReleaseResourceReferenceList" type="ern:ReleaseResourceReferenceList" />
//       <xs:element name="ResourceOmissionReason" type="ern:ResourceOmissionReason" />
//     </xs:choice>
//     <xs:element name="ReleaseCollectionReferenceList" minOccurs="0" type="ern:ReleaseCollectionReferenceList" />
//     <xs:element name="ReleaseType" minOccurs="0" maxOccurs="unbounded" type="ern:ReleaseType" />
//     <xs:element name="ReleaseDetailsByTerritory" maxOccurs="unbounded" type="ern:ReleaseDetailsByTerritory" />
//     <xs:element name="LanguageOfPerformance" minOccurs="0" maxOccurs="unbounded" type="avs:IsoLanguageCode" />
//     <xs:element name="LanguageOfDubbing" minOccurs="0" maxOccurs="unbounded" type="avs:IsoLanguageCode" />
//     <xs:element name="SubTitleLanguage" minOccurs="0" maxOccurs="unbounded" type="avs:IsoLanguageCode" />
//     <xs:element name="Duration" minOccurs="0" type="xs:duration" />
//     <xs:element name="RightsAgreementId" minOccurs="0" type="ern:RightsAgreementId" />
//     <xs:element name="PLine" minOccurs="0" maxOccurs="unbounded" type="ern:PLine" />
//     <xs:element name="CLine" minOccurs="0" maxOccurs="unbounded" type="ern:CLine" />
//     <xs:element name="ArtistProfilePage" minOccurs="0" maxOccurs="unbounded" type="ern:WebPage" />
//     <xs:element name="GlobalReleaseDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="GlobalOriginalReleaseDate" minOccurs="0" type="ern:EventDate" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   <xs:attribute name="IsMainRelease" type="xs:boolean" />
// </xs:complexType>
export type Release = ReleaseChoice & {
  _attributes?: {
    languageAndScriptCode?: string;
    isMainRelease?: boolean;
  };

  releaseId: ReleaseId[];
  releaseReference?: `${string & {
    __brand: "R[\\d\\-_a-zA-Z]+";
  }}`[];
  // @todo <xs:element name="ExternalResourceLink" minOccurs="0" maxOccurs="unbounded" type="ern:ExternalResourceLink" />
  // @todo <xs:element name="SalesReportingProxyReleaseId" minOccurs="0" maxOccurs="unbounded" type="ern:SalesReportingProxyReleaseId" />
  referenceTitle: ReferenceTitle;
  // @todo <xs:element name="ReleaseCollectionReferenceList" minOccurs="0" type="ern:ReleaseCollectionReferenceList" />
  releaseType?: ReleaseType[];
  releaseDetailsByTerritory: ReleaseDetailsByTerritory[];
  languageOfPerformance?: Avs20200108.IsoLanguageCode[];
  languageOfDubbing?: Avs20200108.IsoLanguageCode[];
  subTitleLanguage?: Avs20200108.IsoLanguageCode[];
  duration?: number;
  rightsAgreementId?: RightsAgreementId;
  pLine?: PLine[];
  cLine?: CLine[];
  // @todo <xs:element name="ArtistProfilePage" minOccurs="0" maxOccurs="unbounded" type="ern:WebPage" />
  globalReleaseDate?: EventDate;
  globalOriginalReleaseDate?: EventDate;
};

type ReleaseChoice =
  | {
      releaseResourceReferenceList: ReleaseResourceReferenceList;
      resourceOmissionReason?: never;
    }
  | {
      releaseResourceReferenceList?: never;
      resourceOmissionReason: ResourceOmissionReason;
    };
