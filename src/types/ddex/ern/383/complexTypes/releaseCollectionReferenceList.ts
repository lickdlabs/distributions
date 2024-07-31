import { ReleaseCollectionReference } from "./releaseCollectionReference";

// <xs:complexType name="ReleaseCollectionReferenceList">
//   <xs:sequence>
//     <xs:element name="NumberOfCollections" minOccurs="0" type="xs:integer" />
//     <xs:element name="ReleaseCollectionReference" maxOccurs="unbounded" type="ern:ReleaseCollectionReference" />
//   </xs:sequence>
// </xs:complexType>
export type ReleaseCollectionReferenceList = {
  numberOfCollections?: number;
  releaseCollectionReference: ReleaseCollectionReference[];
};
