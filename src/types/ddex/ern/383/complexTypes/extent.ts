import { Avs20200108 } from "../../../avs";

// <xs:complexType name="Extent">
//   <xs:simpleContent>
//     <xs:extension base="xs:decimal">
//       <xs:attribute name="UnitOfMeasure" type="avs:UnitOfExtent" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type Extent = {
  _attributes?: {
    unitOfMeasure?: Avs20200108.UnitOfExtent;
  };

  value: number;
};
