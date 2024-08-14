import { Avs411 } from "../../../avs";

// <xs:complexType name="ImageCodecType">
//   <xs:simpleContent>
//     <xs:extension base="avs:ImageCodecType">
//       <xs:attribute name="Version" type="xs:string" />
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type ImageCodecType = {
  _attributes?: {
    version?: string;
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs411.ImageCodecType;
};
