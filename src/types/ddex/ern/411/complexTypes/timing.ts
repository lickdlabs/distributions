// <xs:complexType name="Timing">
//   <xs:sequence>
//     <xs:element name="StartPoint" minOccurs="0" type="xs:duration" />
//     <xs:element name="DurationUsed" minOccurs="0" type="xs:duration" />
//   </xs:sequence>
// </xs:complexType>
export type Timing = {
  startPoint?: number;
  durationUsed?: number;
};
