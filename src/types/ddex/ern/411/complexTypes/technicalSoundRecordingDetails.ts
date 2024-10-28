import { Avs411 } from "../../../avs";
import { TechnicalResourceDetailsReference } from "../references";
import { AudioCodecType } from "./audioCodecType";
import { BitRate } from "./bitRate";
import { File } from "./file";
import { Fingerprint } from "./fingerprint";
import { SamplingRate } from "./samplingRate";
import { SoundRecordingPreviewDetails } from "./soundRecordingPreviewDetails";

// <xs:complexType name="TechnicalSoundRecordingDetails">
//   <xs:sequence>
//     <xs:element name="TechnicalResourceDetailsReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:ID">
//           <xs:pattern value="T[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="AudioCodecType" minOccurs="0" type="ern:AudioCodecType" />
//     <xs:element name="BitRate" minOccurs="0" type="ern:BitRate" />
//     <xs:element name="OriginalBitRate" minOccurs="0" type="ern:BitRate" />
//     <xs:element name="NumberOfChannels" minOccurs="0" type="xs:integer" />
//     <xs:element name="SamplingRate" minOccurs="0" type="ern:SamplingRate" />
//     <xs:element name="OriginalSamplingRate" minOccurs="0" type="ern:SamplingRate" />
//     <xs:element name="BitsPerSample" minOccurs="0" type="xs:integer" />
//     <xs:element name="Duration" minOccurs="0" type="xs:duration" />
//     <xs:element name="BitDepth" minOccurs="0" type="xs:integer" />
//     <xs:element name="IsPreview" minOccurs="0" type="xs:boolean" />
//     <xs:element name="PreviewDetails" minOccurs="0" type="ern:SoundRecordingPreviewDetails" />
//     <xs:element name="File" minOccurs="0" type="ern:File" />
//     <xs:element name="Fingerprint" minOccurs="0" maxOccurs="unbounded" type="ern:Fingerprint" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//   <xs:attribute name="IsDefault" type="xs:boolean" />
// </xs:complexType>
export type TechnicalSoundRecordingDetails = {
  _attributes?: {
    languageAndScriptCode?: string;
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    isDefault?: boolean;
  };

  technicalResourceDetailsReference: TechnicalResourceDetailsReference;
  audioCodecType?: AudioCodecType;
  bitRate?: BitRate;
  originalBitRate?: BitRate;
  numberOfChannels?: number;
  samplingRate?: SamplingRate;
  originalSamplingRate?: SamplingRate;
  bitsPerSample?: number;
  duration?: number;
  bitDepth?: number;
  isPreview?: boolean;
  previewDetails?: SoundRecordingPreviewDetails;
  file?: File;
  fingerprint?: Fingerprint[];
};
