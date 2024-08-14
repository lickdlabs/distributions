import { Avs20161006 } from "../../../avs";
import { FingerprintAlgorithmType } from "./fingerprintAlgorithmType";

// <xs:complexType name="Fingerprint">
//   <xs:sequence>
//     <xs:element name="Fingerprint" type="xs:string" />
//     <xs:element name="FingerprintAlgorithmType" type="ern:FingerprintAlgorithmType" />
//     <xs:element name="FingerprintAlgorithmVersion" minOccurs="0" type="xs:string" />
//     <xs:element name="FingerprintAlgorithmParameter" minOccurs="0" type="xs:string" />
//     <xs:element name="FingerprintDataType" minOccurs="0" type="avs:BinaryDataType" />
//   </xs:sequence>
// </xs:complexType>
export type Fingerprint = {
  fingerprint: string;
  fingerprintAlgorithmType: FingerprintAlgorithmType;
  fingerprintAlgorithmVersion?: string;
  fingerprintAlgorithmParameter?: string;
  fingerprintDataType?: Avs20161006.BinaryDataType;
};
