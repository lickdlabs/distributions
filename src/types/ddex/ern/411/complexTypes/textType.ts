import { Avs411 } from "../../../avs";

// <xs:complexType name="TextType">
//   <xs:simpleContent>
//     <xs:extension base="avs:TextType">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type TextType = {
  _attributes?: {
    namespace: string;
    userDefinedValue: string;
  };

  value: Avs411.TextType;
};
