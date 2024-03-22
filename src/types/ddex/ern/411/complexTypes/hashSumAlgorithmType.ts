import { Avs411 } from "../../../avs";

// <xs:complexType name="HashSumAlgorithmType">
//   <xs:simpleContent>
//     <xs:extension base="avs:HashSumAlgorithmType">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type HashSumAlgorithmType = {
  _attributes?: {
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs411.HashSumAlgorithmType;
};
