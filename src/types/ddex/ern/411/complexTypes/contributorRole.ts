import { Avs411 } from "../../../avs";

// <xs:complexType name="ContributorRole">
//   <xs:simpleContent>
//     <xs:extension base="avs:ContributorRole">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type ContributorRole = {
  _attributes?: {
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs411.ContributorRole;
};
