import { Avs20200108 } from "../../../avs";

// <xs:complexType name="SoundRecordingType">
//   <xs:simpleContent>
//     <xs:extension base="avs:SoundRecordingType">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type SoundRecordingType = {
  _attributes?: {
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs20200108.SoundRecordingType;
};
