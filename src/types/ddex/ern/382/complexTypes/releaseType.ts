import { Avs20161006 } from "../../../avs";

// <xs:complexType name="ReleaseType">
//   <xs:simpleContent>
//     <xs:extension base="avs:ReleaseType">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type ReleaseType = {
  _attributes?: {
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs20161006.ReleaseType;
};
