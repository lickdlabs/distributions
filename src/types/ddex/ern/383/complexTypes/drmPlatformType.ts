import { Avs20200108 } from "../../../avs";

// <xs:complexType name="DrmPlatformType">
//   <xs:simpleContent>
//     <xs:extension base="avs:DrmPlatformType">
//       <xs:attribute name="Version" type="xs:string" />
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type DrmPlatformType = {
  _attributes?: {
    version?: string;
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs20200108.DrmPlatformType;
};
