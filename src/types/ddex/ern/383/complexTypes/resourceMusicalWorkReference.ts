import { MusicalWorkReference } from "../references";

// <xs:complexType name="ResourceMusicalWorkReference">
//   <xs:sequence>
//     <xs:element name="SequenceNumber" minOccurs="0" type="xs:integer" />
//     <xs:element name="DurationUsed" minOccurs="0" type="xs:duration" />
//     <xs:element name="IsFragment" minOccurs="0" type="xs:boolean" />
//     <xs:element name="ResourceMusicalWorkReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="W[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//   </xs:sequence>
// </xs:complexType>
export type ResourceMusicalWorkReference = {
  sequenceNumber?: number;
  durationUsed?: number;
  isFragment?: boolean;
  resourceMusicalWorkReference: MusicalWorkReference;
};
