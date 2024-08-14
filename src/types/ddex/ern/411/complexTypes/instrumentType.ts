import { Avs411 } from "../../../avs";

// <xs:complexType name="InstrumentType">
//   <xs:simpleContent>
//     <xs:extension base="avs:InstrumentType">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type InstrumentType = {
  _attributes?: {
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs411.InstrumentType;
};
