import { Avs20200108 } from "../../../avs";
import { Description } from "./description";

// <xs:complexType name="SoundRecordingPreviewDetails">
//   <xs:sequence>
//     <xs:element name="PartType" minOccurs="0" type="ern:Description" />
//     <xs:element name="StartPoint" minOccurs="0" type="xs:decimal" />
//     <xs:element name="EndPoint" minOccurs="0" type="xs:decimal" />
//     <xs:element name="Duration" minOccurs="0" type="xs:duration" />
//     <xs:element name="TopLeftCorner" minOccurs="0" type="xs:decimal" />
//     <xs:element name="BottomRightCorner" minOccurs="0" type="xs:decimal" />
//     <xs:element name="ExpressionType" type="avs:ExpressionType" />
//   </xs:sequence>
// </xs:complexType>
export type SoundRecordingPreviewDetails = {
  partType?: Description;
  startPoint?: number;
  endPoint?: number;
  duration?: number;
  topLeftCorner?: number;
  bottomRightCorner?: number;
  expressionType: Avs20200108.ExpressionType;
};
