import { ImageType } from "./imageType";
import { ResourceProprietaryId } from "./resourceProprietaryId";
import { TechnicalImageDetails } from "./technicalImageDetails";

// <xs:complexType name="Image">
//   <xs:sequence>
//     <xs:element name="ResourceReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:ID">
//           <xs:pattern value="A[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="Type" type="ern:ImageType" />
//     <xs:element name="ResourceId" maxOccurs="unbounded" type="ern:ResourceProprietaryId" />
//     <xs:element name="DisplayTitleText" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitleText" />
//     <xs:element name="DisplayTitle" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitle" />
//     <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
//     <xs:element name="VersionType" minOccurs="0" maxOccurs="unbounded" type="ern:VersionType" />
//     <xs:element name="DisplayArtistName" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayArtistNameWithDefault" />
//     <xs:element name="DisplayArtist" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayArtist" />
//     <xs:element name="Contributor" minOccurs="0" maxOccurs="unbounded" type="ern:Contributor" />
//     <xs:element name="ResourceRightsController" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceRightsController" />
//     <xs:element name="WorkRightsController" minOccurs="0" maxOccurs="unbounded" type="ern:WorkRightsController" />
//     <xs:element name="CLine" minOccurs="0" maxOccurs="unbounded" type="ern:CLineWithDefault" />
//     <xs:element name="CourtesyLine" minOccurs="0" maxOccurs="unbounded" type="ern:CourtesyLineWithDefault" />
//     <xs:element name="CreationDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
//     <xs:element name="FirstPublicationDate" minOccurs="0" maxOccurs="unbounded" type="ern:FulfillmentDateWithTerritory" />
//     <xs:element name="ParentalWarningType" minOccurs="0" maxOccurs="unbounded" type="ern:ParentalWarningTypeWithTerritory" />
//     <xs:element name="RelatedRelease" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedRelease" />
//     <xs:element name="RelatedResource" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedResource" />
//     <xs:element name="ContainsHiddenContent" minOccurs="0" type="xs:boolean" />
//     <xs:element name="Description" minOccurs="0" maxOccurs="unbounded" type="ern:DescriptionWithTerritory" />
//     <xs:element name="TechnicalDetails" minOccurs="0" maxOccurs="unbounded" type="ern:TechnicalImageDetails" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   <xs:attribute name="IsSupplemental" type="xs:boolean" />
// </xs:complexType>
export type Image = {
  _attributes?: {
    languageAndScriptCode?: string;
    isSupplemental?: boolean;
  };

  resourceReference: `${string & { __brand: "A[\\d\\-_a-zA-Z]+" }}`;
  type: ImageType;
  resourceId: ResourceProprietaryId[];
  // @todo <xs:element name="DisplayTitleText" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitleText" />
  // @todo <xs:element name="DisplayTitle" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitle" />
  // @todo <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
  // @todo <xs:element name="VersionType" minOccurs="0" maxOccurs="unbounded" type="ern:VersionType" />
  // @todo <xs:element name="DisplayArtistName" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayArtistNameWithDefault" />
  // @todo <xs:element name="DisplayArtist" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayArtist" />
  // @todo <xs:element name="Contributor" minOccurs="0" maxOccurs="unbounded" type="ern:Contributor" />
  // @todo <xs:element name="ResourceRightsController" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceRightsController" />
  // @todo <xs:element name="WorkRightsController" minOccurs="0" maxOccurs="unbounded" type="ern:WorkRightsController" />
  // @todo <xs:element name="CLine" minOccurs="0" maxOccurs="unbounded" type="ern:CLineWithDefault" />
  // @todo <xs:element name="CourtesyLine" minOccurs="0" maxOccurs="unbounded" type="ern:CourtesyLineWithDefault" />
  // @todo <xs:element name="CreationDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
  // @todo <xs:element name="FirstPublicationDate" minOccurs="0" maxOccurs="unbounded" type="ern:FulfillmentDateWithTerritory" />
  // @todo <xs:element name="ParentalWarningType" minOccurs="0" maxOccurs="unbounded" type="ern:ParentalWarningTypeWithTerritory" />
  // @todo <xs:element name="RelatedRelease" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedRelease" />
  // @todo <xs:element name="RelatedResource" minOccurs="0" maxOccurs="unbounded" type="ern:RelatedResource" />
  // @todo <xs:element name="ContainsHiddenContent" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="Description" minOccurs="0" maxOccurs="unbounded" type="ern:DescriptionWithTerritory" />
  technicalDetails?: TechnicalImageDetails[];
};
