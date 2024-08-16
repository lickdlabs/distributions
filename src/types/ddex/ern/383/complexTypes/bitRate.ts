import { Avs20200108 } from "../../../avs";

// <xs:complexType name="BitRate">
//   <xs:simpleContent>
//     <xs:extension base="xs:decimal">
//       <xs:attribute name="UnitOfMeasure" type="avs:UnitOfBitRate" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type BitRate = {
  _attributes?: {
    unitOfMeasure?: Avs20200108.UnitOfBitRate;
  };

  value: number;
};
