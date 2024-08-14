import { Avs20161006 } from "../../../avs";

// <xs:complexType name="Extent">
//   <xs:simpleContent>
//     <xs:extension base="xs:decimal">
//       <xs:attribute name="UnitOfMeasure" type="avs:UnitOfExtent" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type Extent = {
  _attributes?: {
    unitOfMeasure?: Avs20161006.UnitOfExtent;
  };

  value: number;
};
