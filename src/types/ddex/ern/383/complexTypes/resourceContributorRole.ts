import { Avs20200108 } from "../../../avs";

// <xs:complexType name="ResourceContributorRole">
//   <xs:simpleContent>
//     <xs:extension base="avs:ResourceContributorRole">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type ResourceContributorRole = {
  _attributes?: {
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs20200108.ResourceContributorRole;
};
