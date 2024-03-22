import { Description } from "./description";
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
//     <xs:element name="DrmPlatformType" minOccurs="0" type="ern:DrmPlatformType" />
//     <xs:element name="ContainerFormat" minOccurs="0" type="ern:ContainerFormat" />
//     <xs:element name="ImageCodecType" minOccurs="0" type="ern:ImageCodecType" />
//     <xs:element name="ImageHeight" minOccurs="0" type="ern:Extent" />
//     <xs:element name="ImageWidth" minOccurs="0" type="ern:Extent" />
//     <xs:element name="AspectRatio" minOccurs="0" type="ern:AspectRatio" />
//     <xs:element name="ColorDepth" minOccurs="0" type="xs:integer" />
//     <xs:element name="ImageResolution" minOccurs="0" type="xs:integer" />
//     <xs:element name="IsPreview" minOccurs="0" type="xs:boolean" />
//     <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
//     <xs:element name="FulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
//     <xs:element name="ConsumerFulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
//     <xs:choice minOccurs="0">
//       <xs:element name="FileAvailabilityDescription" maxOccurs="unbounded" type="ern:Description" />
//       <xs:element name="File" maxOccurs="unbounded" type="ern:File" />
//     </xs:choice>
//     <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type TechnicalImageDetails = Partial<FileChoice> & {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  technicalResourceDetailsReference: `${string & {
    __brand: "T[\\d\\-_a-zA-Z]+";
  }}`;
  // @todo <xs:element name="DrmPlatformType" minOccurs="0" type="ern:DrmPlatformType" />
  // @todo <xs:element name="ContainerFormat" minOccurs="0" type="ern:ContainerFormat" />
  // @todo <xs:element name="ImageCodecType" minOccurs="0" type="ern:ImageCodecType" />
  // @todo <xs:element name="ImageHeight" minOccurs="0" type="ern:Extent" />
  // @todo <xs:element name="ImageWidth" minOccurs="0" type="ern:Extent" />
  // @todo <xs:element name="AspectRatio" minOccurs="0" type="ern:AspectRatio" />
  // @todo <xs:element name="ColorDepth" minOccurs="0" type="xs:integer" />
  // @todo <xs:element name="ImageResolution" minOccurs="0" type="xs:integer" />
  // @todo <xs:element name="IsPreview" minOccurs="0" type="xs:boolean" />
  // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:PreviewDetails" />
  // @todo <xs:element name="FulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
  // @todo <xs:element name="ConsumerFulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
  // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
};

type FileChoice =
  | { fileAvailabilityDescription: Description[]; file?: never }
  | { fileAvailabilityDescription?: never; file: File[] };
