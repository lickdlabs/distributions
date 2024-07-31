import { DisplaySequenceChoice } from "./displaySequenceChoice";
import { LinkedReleaseResourceReference } from "./linkedReleaseResourceReference";

// <xs:complexType name="ResourceGroupContentItem">
//   <xs:sequence>
//     <xs:element name="SequenceNumber" minOccurs="0" type="xs:integer" />
//     <xs:choice minOccurs="0">
//       <xs:element name="NoDisplaySequence" type="xs:boolean" />
//       <xs:element name="DisplaySequence" type="xs:string" />
//     </xs:choice>
//     <xs:element name="ReleaseResourceReference">
//       <xs:simpleType>
//         <xs:restriction base="xs:IDREF">
//           <xs:pattern value="A[\d\-_a-zA-Z]+" />
//         </xs:restriction>
//       </xs:simpleType>
//     </xs:element>
//     <xs:element name="LinkedReleaseResourceReference" minOccurs="0" maxOccurs="unbounded" type="ern:LinkedReleaseResourceReference" />
//     <xs:element name="IsBonusResource" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsInstantGratificationResource" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsPreOrderIncentiveResource" minOccurs="0" type="xs:boolean" />
//   </xs:sequence>
// </xs:complexType>
export type ResourceGroupContentItem = Partial<DisplaySequenceChoice> & {
  sequenceNumber?: number;
  releaseResourceReference: `${string & { __brand: "A[\\d\\-_a-zA-Z]+" }}`;
  linkedReleaseResourceReference?: LinkedReleaseResourceReference[];
  isBonusResource?: boolean;
  isInstantGratificationResource?: boolean;
  isPreOrderIncentiveResource?: boolean;
};
