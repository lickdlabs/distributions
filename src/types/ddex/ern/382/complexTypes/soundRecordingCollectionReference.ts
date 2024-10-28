import { Avs20161006 } from "../../../avs";
import { CollectionReference } from "../references";

// <xs:complexType name="SoundRecordingCollectionReference">
//   <xs:sequence>
//     <xs:element name="SequenceNumber" minOccurs="0" type="xs:integer" />
//     <xs:element name="SoundRecordingCollectionReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="X[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="StartTime" minOccurs="0" type="xs:duration" />
//     <xs:element name="Duration" minOccurs="0" type="xs:duration" />
//     <xs:element name="EndTime" minOccurs="0" type="xs:duration" />
//     <xs:element name="ReleaseResourceType" minOccurs="0" type="avs:ReleaseResourceType" />
//   </xs:sequence>
// </xs:complexType>
export type SoundRecordingCollectionReference = {
  sequenceNumber?: number;
  soundRecordingCollectionReference: CollectionReference;
  startTime?: number;
  duration?: number;
  endTime?: number;
  releaseResourceType?: Avs20161006.ReleaseResourceType;
};
