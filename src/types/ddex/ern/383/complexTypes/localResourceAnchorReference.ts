// <xs:simpleType name="ddex_LocalResourceAnchorReference">
//   <xs:restriction base="xs:IDREF">
//     <xs:pattern value="A[\d\-_a-zA-Z]+" />
//   </xs:restriction>
// </xs:simpleType>
export type LocalResourceAnchorReference = `${string & {
  __brand: "A[\\d\\-_a-zA-Z]+";
}}`;
