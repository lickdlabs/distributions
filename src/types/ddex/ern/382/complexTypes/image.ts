import { ImageDetailsByTerritory } from "./imageDetailsByTerritory";
import { ResourceProprietaryId } from "./resourceProprietaryId";

// <xs:complexType name="Image">
//   <xs:sequence>
//     <xs:element name="ImageType" minOccurs="0" type="ern:ImageType" />
//     <xs:element name="IsArtistRelated" minOccurs="0" type="xs:boolean" />
//     <xs:element name="ImageId" maxOccurs="unbounded" type="ern:ResourceProprietaryId" />
//     <xs:element name="ResourceReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:ID">
//           <xs:pattern value="A[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="Title" minOccurs="0" maxOccurs="unbounded" type="ern:Title" />
//     <xs:element name="CreationDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="ImageDetailsByTerritory" maxOccurs="unbounded" type="ern:ImageDetailsByTerritory" />
//   </xs:sequence>
//   <xs:attribute name="IsUpdated" type="xs:boolean" />
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type Image = {
  _attributes?: {
    isUpdated?: boolean;
    languageAndScriptCode?: string;
  };

  // @todo <xs:element name="ImageType" minOccurs="0" type="ern:ImageType" />
  // @todo <xs:element name="IsArtistRelated" minOccurs="0" type="xs:boolean" />
  imageId: ResourceProprietaryId[];
  resourceReference: `${string & { __brand: "A[\\d\\-_a-zA-Z]+" }}`;
  // @todo <xs:element name="Title" minOccurs="0" maxOccurs="unbounded" type="ern:Title" />
  // @todo <xs:element name="CreationDate" minOccurs="0" type="ern:EventDate" />
  imageDetailsByTerritory: ImageDetailsByTerritory[];
};
