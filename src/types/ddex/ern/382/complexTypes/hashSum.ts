import { Avs20161006 } from "../../../avs";

// <xs:complexType name="HashSum">
//   <xs:sequence>
//     <xs:element name="HashSum" type="xs:string" />
//     <xs:element name="HashSumAlgorithmType" type="ern:HashSumAlgorithmType" />
//     <xs:element name="HashSumDataType" minOccurs="0" type="avs:BinaryDataType" />
//   </xs:sequence>
// </xs:complexType>
export type HashSum = {
  hashSum: string;
  hashSumAlgorithmType: Avs20161006.HashSumAlgorithmType;
  hashSumDataType?: Avs20161006.BinaryDataType;
};
