import { Avs411 } from "../../../avs";
import { File } from "./file";
import { FingerprintAlgorithmType } from "./fingerprintAlgorithmType";

// <xs:complexType name="Fingerprint">
//   <xs:sequence>
//     <xs:element name="Algorithm" type="ern:FingerprintAlgorithmType" />
//     <xs:element name="Version" minOccurs="0" type="xs:string" />
//     <xs:element name="Parameter" minOccurs="0" type="xs:string" />
//     <xs:choice minOccurs="0">
//       <xs:element name="File" type="ern:File" />
//       <xs:sequence>
//         <xs:element name="DataType" type="avs:BinaryDataType" />
//         <xs:element name="FingerprintValue" type="xs:string" />
//       </xs:sequence>
//     </xs:choice>
//   </xs:sequence>
// </xs:complexType>
export type Fingerprint = Partial<FingerprintChoice> & {
  algorithm: FingerprintAlgorithmType;
  version?: string;
  parameter?: string;
};

// <xs:choice>
//   <xs:element name="File" type="ern:File" />
//   <xs:sequence>
//     <xs:element name="DataType" type="avs:BinaryDataType" />
//     <xs:element name="FingerprintValue" type="xs:string" />
//   </xs:sequence>
// </xs:choice>
export type FingerprintChoice =
  | { file: File; dataType?: never; fingerprintValue?: never }
  | { file?: never; dataType: Avs411.BinaryDataType; fingerprintValue: string };
