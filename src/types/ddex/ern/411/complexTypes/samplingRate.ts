import { Avs411 } from "../../../avs";

// <xs:complexType name="SamplingRate">
//   <xs:simpleContent>
//     <xs:extension base="xs:decimal">
//       <xs:attribute name="UnitOfMeasure" type="avs:UnitOfFrequency" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type SamplingRate = {
  _attributes?: {
    unitOfMeasure?: Avs411.UnitOfFrequency;
  };

  value: number;
};
