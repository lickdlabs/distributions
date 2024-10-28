import { Avs411 } from "../../../avs";
import { TechnicalResourceDetailsReference } from "../references";
import { AspectRatio } from "./aspectRatio";
import { Extent } from "./extent";
import { File } from "./file";
import { Fingerprint } from "./fingerprint";
import { ImageCodecType } from "./imageCodecType";
import { PreviewDetails } from "./previewDetails";

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

  technicalResourceDetailsReference: TechnicalResourceDetailsReference;
  imageCodecType?: ImageCodecType;
  imageHeight?: Extent;
  imageWidth?: Extent;
  aspectRatio?: AspectRatio;
  colorDepth?: number;
  imageResolution?: number;
  bitDepth?: number;
  isPreview?: boolean;
  previewDetails?: PreviewDetails;
  file?: File;
  fingerprint?: Fingerprint[];
};
