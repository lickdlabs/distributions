// <xs:simpleType name="ddex_LocalCollectionAnchorReference">
//   <xs:restriction base="xs:IDREF">
//     <xs:pattern value="X[\d\-_a-zA-Z]+" />
//   </xs:restriction>
// </xs:simpleType>
export type LocalCollectionAnchorReference = `${string & {
  __brand: "X[\\d\\-_a-zA-Z]+";
}}`;
