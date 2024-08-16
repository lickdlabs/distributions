import { Avs20161006 } from "../../../avs";

// <xs:complexType name="BitRate">
//   <xs:simpleContent>
//     <xs:extension base="xs:decimal">
//       <xs:attribute name="UnitOfMeasure" type="avs:UnitOfBitRate" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type BitRate = {
  _attributes?: {
    unitOfMeasure?: Avs20161006.UnitOfBitRate;
  };

  value: number;
};
