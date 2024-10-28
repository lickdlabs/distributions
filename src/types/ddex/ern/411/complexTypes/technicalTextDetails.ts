import { Avs411 } from "../../../avs";
import { TechnicalResourceDetailsReference } from "../references";
import { File } from "./file";

// <xs:complexType name="TechnicalTextDetails">
//   <xs:sequence>
//     <xs:element name="TechnicalResourceDetailsReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:ID">
//           <xs:pattern value="T[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="TextCodecType" minOccurs="0" type="ern:TextCodecType" />
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
export type TechnicalTextDetails = {
  _attributes?: {
    languageAndScriptCode?: string;
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    isDefault?: boolean;
  };

  technicalResourceDetailsReference: TechnicalResourceDetailsReference;
  // @todo <xs:element name="TextCodecType" minOccurs="0" type="ern:TextCodecType" />
  bitDepth?: number;
  isPreview?: boolean;
  // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
  file?: File;
  // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
};
