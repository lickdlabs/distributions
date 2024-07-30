import { Description } from "./description";
import { File } from "./file";
import { FileChoice } from "./fileChoice";

// <xs:complexType name="TechnicalSoundRecordingDetails">
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
//     <xs:element name="AudioCodecType" minOccurs="0" type="ern:AudioCodecType" />
//     <xs:element name="BitRate" minOccurs="0" type="ern:BitRate" />
//     <xs:element name="NumberOfChannels" minOccurs="0" type="xs:integer" />
//     <xs:element name="SamplingRate" minOccurs="0" type="ern:SamplingRate" />
//     <xs:element name="BitsPerSample" minOccurs="0" type="xs:integer" />
//     <xs:element name="Duration" minOccurs="0" type="xs:duration" />
//     <xs:element name="ResourceProcessingRequired" minOccurs="0" type="xs:boolean" />
//     <xs:element name="UsableResourceDuration" minOccurs="0" type="xs:duration" />
//     <xs:element name="IsPreview" minOccurs="0" type="xs:boolean" />
//     <xs:element name="PreviewDetails" minOccurs="0" type="ern:SoundRecordingPreviewDetails" />
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
export type TechnicalSoundRecordingDetails = Partial<FileChoice> & {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  technicalResourceDetailsReference: `${string & {
    __brand: "T[\\d\\-_a-zA-Z]+";
  }}`;
  // @todo <xs:element name="DrmPlatformType" minOccurs="0" type="ern:DrmPlatformType" />
  // @todo <xs:element name="ContainerFormat" minOccurs="0" type="ern:ContainerFormat" />
  // @todo <xs:element name="AudioCodecType" minOccurs="0" type="ern:AudioCodecType" />
  // @todo <xs:element name="BitRate" minOccurs="0" type="ern:BitRate" />
  numberOfChannels?: number;
  // @todo <xs:element name="SamplingRate" minOccurs="0" type="ern:SamplingRate" />
  bitsPerSample?: number;
  duration?: number;
  resourceProcessingRequired?: boolean;
  usableResourceDuration?: number;
  isPreview?: boolean;
  // @todo <xs:element name="PreviewDetails" minOccurs="0" type="ern:SoundRecordingPreviewDetails" />
  // @todo <xs:element name="FulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
  // @todo <xs:element name="ConsumerFulfillmentDate" minOccurs="0" type="ern:FulfillmentDate" />
  // @todo <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
};
