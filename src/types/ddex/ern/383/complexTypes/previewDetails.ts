import { Avs20200108 } from "../../../avs";
import { Description } from "./description";

// <xs:complexType name="PreviewDetails">
//   <xs:sequence>
//     <xs:element name="PartType" minOccurs="0" type="ern:Description" />
//     <xs:element name="TopLeftCorner" minOccurs="0" type="xs:decimal" />
//     <xs:element name="BottomRightCorner" minOccurs="0" type="xs:decimal" />
//     <xs:element name="ExpressionType" type="avs:ExpressionType" />
//   </xs:sequence>
// </xs:complexType>
export type PreviewDetails = {
  partType?: Description;
  topLeftCorner?: number;
  bottomRightCorner?: number;
  expressionType: Avs20200108.ExpressionType;
};
