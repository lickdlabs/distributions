import { ReleaseResourceReference } from "./releaseResourceReference";

// <xs:complexType name="ReleaseResourceReferenceList">
//   <xs:sequence>
//     <xs:element name="ReleaseResourceReference" maxOccurs="unbounded" type="ern:ReleaseResourceReference" />
//   </xs:sequence>
// </xs:complexType>
export type ReleaseResourceReferenceList = {
  releaseResourceReference: ReleaseResourceReference[];
};
