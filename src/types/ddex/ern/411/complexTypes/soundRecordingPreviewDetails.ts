import { Avs411 } from "../../../avs";

// <xs:complexType name="SoundRecordingPreviewDetails">
//   <xs:sequence>
//     <xs:element name="StartPoint" minOccurs="0" type="xs:decimal" />
//     <xs:element name="EndPoint" minOccurs="0" type="xs:decimal" />
//     <xs:element name="Duration" minOccurs="0" type="xs:duration" />
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
export type SoundRecordingPreviewDetails = {
  startPoint?: number;
  endPoint?: number;
  duration?: number;
  topLeftCorner?: `${string & { __brand: "[0-9]+,[0-9]+" }}`;
  bottomRightCorner?: `${string & { __brand: "[0-9]+,[0-9]+" }}`;
  expressionType: Avs411.ExpressionType;
};
