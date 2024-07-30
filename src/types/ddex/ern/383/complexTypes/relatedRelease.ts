import { ReferenceTitle } from "./referenceTitle";
import { ReleaseId } from "./releaseId";
import { RightsAgreementId } from "./rightsAgreementId";

// <xs:complexType name="RelatedRelease">
//   <xs:sequence>
//     <xs:element name="ReleaseId" maxOccurs="unbounded" type="ern:ReleaseId" />
//     <xs:element name="ReferenceTitle" minOccurs="0" type="ern:ReferenceTitle" />
//     <xs:element name="ReleaseSummaryDetailsByTerritory" minOccurs="0" maxOccurs="unbounded" type="ern:ReleaseSummaryDetailsByTerritory" />
//     <xs:element name="RightsAgreementId" minOccurs="0" type="ern:RightsAgreementId" />
//     <xs:element name="ReleaseRelationshipType" type="ern:ReleaseRelationshipType" />
//     <xs:element name="ReleaseDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="OriginalReleaseDate" minOccurs="0" type="ern:EventDate" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type RelatedRelease = {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  releaseId: ReleaseId[];
  referenceTitle?: ReferenceTitle;
  // @todo <xs:element name="ReleaseSummaryDetailsByTerritory" minOccurs="0" maxOccurs="unbounded" type="ern:ReleaseSummaryDetailsByTerritory" />
  rightsAgreementId?: RightsAgreementId;
  // @todo <xs:element name="ReleaseRelationshipType" type="ern:ReleaseRelationshipType" />
  // @todo <xs:element name="ReleaseDate" minOccurs="0" type="ern:EventDate" />
  // @todo <xs:element name="OriginalReleaseDate" minOccurs="0" type="ern:EventDate" />
};
