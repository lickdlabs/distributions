import { Avs411 } from "../../../avs";

// <xs:complexType name="AspectRatio">
//   <xs:simpleContent>
//     <xs:extension base="xs:decimal">
//       <xs:attribute name="AspectRatioType" type="avs:AspectRatioType" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type AspectRatio = {
  _attribute?: {
    aspectRatioType?: Avs411.AspectRatioType;
  };

  value: number;
};
