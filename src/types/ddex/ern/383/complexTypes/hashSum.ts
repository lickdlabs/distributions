import { Avs20200108 } from "../../../avs";

// <xs:complexType name="HashSum">
//   <xs:sequence>
//     <xs:element name="HashSum" type="xs:string" />
//     <xs:element name="HashSumAlgorithmType" type="ern:HashSumAlgorithmType" />
//     <xs:element name="HashSumDataType" minOccurs="0" type="avs:BinaryDataType" />
//   </xs:sequence>
// </xs:complexType>
export type HashSum = {
  hashSum: string;
  hashSumAlgorithmType: Avs20200108.HashSumAlgorithmType;
  hashSumDataType?: Avs20200108.BinaryDataType;
};
