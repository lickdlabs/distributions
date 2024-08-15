import { ResourceMusicalWorkReference } from "./resourceMusicalWorkReference";

// <xs:complexType name="ResourceMusicalWorkReferenceList">
//   <xs:sequence>
//     <xs:element name="ResourceMusicalWorkReference" maxOccurs="unbounded" type="ern:ResourceMusicalWorkReference" />
//   </xs:sequence>
// </xs:complexType>
export type ResourceMusicalWorkReferenceList = {
  resourceMusicalWorkReference: ResourceMusicalWorkReference[];
};
