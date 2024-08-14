import { Avs20200108 } from "../../../avs";

// <xs:complexType name="AspectRatio">
//   <xs:simpleContent>
//     <xs:extension base="xs:decimal">
//       <xs:attribute name="AspectRatioType" type="avs:UnitOfFrameRate" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type AspectRatio = {
  _attributes?: {
    aspectRatioType?: Avs20200108.UnitOfFrameRate;
  };

  value: number;
};