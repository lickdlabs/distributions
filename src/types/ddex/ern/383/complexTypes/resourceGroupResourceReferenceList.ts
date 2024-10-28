import { ResourceReference } from "../references";

// <xs:complexType name="ResourceGroupResourceReferenceList">
//   <xs:sequence>
//     <xs:element name="ResourceGroupResourceReference" maxOccurs="unbounded">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="A[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//   </xs:sequence>
// </xs:complexType>
export type ResourceGroupResourceReferenceList = {
  resourceGroupResourceReference: ResourceReference[];
};
