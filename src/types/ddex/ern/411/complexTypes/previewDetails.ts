import { Avs411 } from "../../../avs";

// <xs:complexType name="PreviewDetails">
//   <xs:sequence>
//     <xs:element name="TopLeftCorner" minOccurs="0">
//       <xs:simpleType>
//         <xs:restriction base="xs:string">
//           <xs:pattern value="[0-9]+,[0-9]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="BottomRightCorner" minOccurs="0">
//       <xs:simpleType>
//         <xs:restriction base="xs:string">
//           <xs:pattern value="[0-9]+,[0-9]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="ExpressionType" type="avs:ExpressionType" />
//   </xs:sequence>
// </xs:complexType>
export type PreviewDetails = {
  topLeftCorner?: `${string & { __brand: "[0-9]+,[0-9]+" }}`;
  bottomRightCorner?: `${string & { __brand: "[0-9]+,[0-9]+" }}`;
  expressionType: Avs411.ExpressionType;
};
