import { Purpose } from "./purpose";

// <xs:complexType name="ResourceContainedResourceReference">
//   <xs:sequence>
//     <xs:element name="ResourceContainedResourceReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="A[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="DurationUsed" minOccurs="0" type="xs:duration" />
//     <xs:element name="StartPoint" minOccurs="0" type="xs:decimal" />
//     <xs:element name="Purpose" minOccurs="0" type="ern:Purpose" />
//   </xs:sequence>
// </xs:complexType>
export type ResourceContainedResourceReference = {
  resourceContainedResourceReference: `${string & {
    __brand: "A[\\d\\-_a-zA-Z]+";
  }}`;
  durationUsed?: number;
  startPoint?: number;
  purpose?: Purpose;
};
