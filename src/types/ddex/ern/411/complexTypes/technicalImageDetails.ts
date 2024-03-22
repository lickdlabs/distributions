import { Avs411 } from "../../../avs";
import { File } from "./file";

// <xs:complexType name="TechnicalImageDetails">
//   <xs:sequence>
//     <xs:element name="TechnicalResourceDetailsReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:ID">
//           <xs:pattern value="T[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="ImageCodecType" minOccurs="0" type="ern:ImageCodecType" />
//     <xs:element name="ImageHeight" minOccurs="0" type="ern:Extent" />
//     <xs:element name="ImageWidth" minOccurs="0" type="ern:Extent" />
//     <xs:element name="AspectRatio" minOccurs="0" type="ern:AspectRatio" />
//     <xs:element name="ColorDepth" minOccurs="0" type="xs:integer" />
//     <xs:element name="ImageResolution" minOccurs="0" type="xs:integer" />
//     <xs:element name="BitDepth" minOccurs="0" type="xs:integer" />
//     <xs:element name="IsPreview" minOccurs="0" type="xs:boolean" />
//     <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
//     <xs:element name="File" minOccurs="0" type="ern:File" />
//     <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//   <xs:attribute name="IsDefault" type="xs:boolean" />
// </xs:complexType>
export type TechnicalImageDetails = {
  _attributes?: {
    languageAndScriptCode?: string;
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    isDefault?: boolean;
  };

  technicalResourceDetailsReference: `${string & {
    __brand: "T[\\d\\-_a-zA-Z]+";
  }}`;
  // @todo <xs:element name="ImageCodecType" minOccurs="0" type="ern:ImageCodecType" />
  // @todo <xs:element name="ImageHeight" minOccurs="0" type="ern:Extent" />
  // @todo <xs:element name="ImageWidth" minOccurs="0" type="ern:Extent" />
  // @todo <xs:element name="AspectRatio" minOccurs="0" type="ern:AspectRatio" />
  // @todo <xs:element name="ColorDepth" minOccurs="0" type="xs:integer" />
  // @todo <xs:element name="ImageResolution" minOccurs="0" type="xs:integer" />
  // @todo <xs:element name="BitDepth" minOccurs="0" type="xs:integer" />
  // @todo <xs:element name="IsPreview" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
  // @todo <xs:element name="File" minOccurs="0" type="ern:File" />
  file?: File;
  // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
};
