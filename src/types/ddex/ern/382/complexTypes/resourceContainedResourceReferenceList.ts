import { ResourceContainedResourceReference } from "./resourceContainedResourceReference";

// <xs:complexType name="ResourceContainedResourceReferenceList">
//   <xs:sequence>
//     <xs:element name="ResourceContainedResourceReference" maxOccurs="unbounded" type="ern:ResourceContainedResourceReference" />
//   </xs:sequence>
// </xs:complexType>
export type ResourceContainedResourceReferenceList = {
  resourceContainedResourceReference: ResourceContainedResourceReference[];
};
