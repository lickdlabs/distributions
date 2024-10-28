import { Avs411 } from "../../../avs";
import { ResourceReference } from "../references";
import { ReleaseId } from "./releaseId";
import { Timing } from "./timing";

// <xs:complexType name="RelatedResource">
//   <xs:sequence>
//     <xs:element name="ResourceRelationshipType" type="avs:ResourceRelationshipType" />
//     <xs:choice>
//       <xs:element name="ResourceRelatedResourceReference">
//         <xs:simpleType>
//           <xs:restriction base="xs:IDREF">
//             <xs:pattern value="A[\d\-_a-zA-Z]+" />
//           </xs:restriction>
//         </xs:simpleType>
//       </xs:element>
//       <xs:element name="ReleaseId" type="ern:ReleaseId" />
//     </xs:choice>
//     <xs:element name="Timing" minOccurs="0" maxOccurs="unbounded" type="ern:Timing" />
//   </xs:sequence>
// </xs:complexType>
export type RelatedResource = RelatedResourceIdentifier & {
  resourceRelationshipType: Avs411.ResourceRelationshipType;
  timing?: Timing[];
};

export type RelatedResourceIdentifier =
  | {
      resourceRelatedResourceReference: ResourceReference;
      releaseId?: never;
    }
  | { resourceRelatedResourceReference?: never; releaseId: ReleaseId };
