import { Avs411 } from "../../../avs";
import { HashSumAlgorithmType } from "./hashSumAlgorithmType";

// <xs:complexType name="DetailedHashSum">
//   <xs:sequence>
//     <xs:element name="Algorithm" type="ern:HashSumAlgorithmType" />
//     <xs:element name="Version" minOccurs="0" type="xs:string" />
//     <xs:element name="Parameter" minOccurs="0" type="xs:string" />
//     <xs:element name="DataType" minOccurs="0" type="avs:BinaryDataType" />
//     <xs:element name="HashSumValue" type="xs:string" />
//   </xs:sequence>
// </xs:complexType>
export type DetailedHashSum = {
  algorithm: HashSumAlgorithmType;
  version?: string;
  parameter?: string;
  dataType?: Avs411.BinaryDataType;
  hashSumValue: string;
};
