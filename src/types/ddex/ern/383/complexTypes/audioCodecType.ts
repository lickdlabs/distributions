import { Avs20200108 } from "../../../avs";

// <xs:complexType name="AudioCodecType">
//   <xs:simpleContent>
//     <xs:extension base="avs:AudioCodecType">
//       <xs:attribute name="Version" type="xs:string" />
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type AudioCodecType = {
  _attributes?: {
    version?: string;
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs20200108.AudioCodecType;
};
