import { ResourceReference } from "../references";

// <xs:simpleType name="ddex_LocalResourceAnchorReference">
//   <xs:restriction base="xs:IDREF">
//     <xs:pattern value="A[\d\-_a-zA-Z]+" />
//   </xs:restriction>
// </xs:simpleType>
export type LocalResourceAnchorReference = ResourceReference;
