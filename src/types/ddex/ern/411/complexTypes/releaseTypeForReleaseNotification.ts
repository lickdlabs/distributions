import { Avs411 } from "../../../avs";

// <xs:complexType name="ReleaseTypeForReleaseNotification">
//   <xs:simpleContent>
//     <xs:extension base="avs:ReleaseType_ERN4">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type ReleaseTypeForReleaseNotification = {
  _attributes?: {
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs411.ReleaseTypeErn4;
};
