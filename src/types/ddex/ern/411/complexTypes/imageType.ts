import { Avs411 } from "../../../avs";

// <xs:complexType name="ImageType">
//  <xs:simpleContent>
//     <xs:extension base="avs:ImageType">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type ImageType = {
  _attributes?: {
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs411.ImageType;
};
