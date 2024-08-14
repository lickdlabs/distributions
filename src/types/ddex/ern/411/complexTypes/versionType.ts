import { Avs411 } from "../../../avs";

// <xs:complexType name="VersionType">
//   <xs:simpleContent>
//     <xs:extension base="avs:VersionType">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type VersionType = {
  _attributes?: {
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs411.VersionType;
};
