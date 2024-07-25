// <xs:simpleType name="ddex_LocalPartyAnchorReference">
//   <xs:restriction base="xs:IDREF">
//     <xs:pattern value="P[\d\-_a-zA-Z]+" />
//   </xs:restriction>
// </xs:simpleType>
export type LocalPartyAnchorReference = `${string & {
  __brand: "P[\\d\\-_a-zA-Z]+";
}}`;
