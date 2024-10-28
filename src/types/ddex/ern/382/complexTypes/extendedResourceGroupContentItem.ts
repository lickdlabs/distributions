import { ReleaseReference } from "../references";
import { LinkedReleaseResourceReference } from "./linkedReleaseResourceReference";
import { ReleaseId } from "./releaseId";
import { ReleaseResourceReference } from "./releaseResourceReference";
import { ResourceType } from "./resourceType";

// <xs:complexType name="ExtendedResourceGroupContentItem">
//   <xs:sequence>
//     <xs:element name="SequenceNumber" minOccurs="0" type="xs:integer" />
//     <xs:element name="SequenceSubNumber" minOccurs="0" type="xs:integer" />
//     <xs:element name="ResourceType" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceType" />
//     <xs:element name="ReleaseResourceReference" type="ern:ReleaseResourceReference" />
//     <xs:element name="LinkedReleaseResourceReference" minOccurs="0" maxOccurs="unbounded" type="ern:LinkedReleaseResourceReference" />
//     <xs:choice minOccurs="0">
//       <xs:element name="ResourceGroupContentItemReleaseReference">
//         <xs:simpleType>
//           <xs:restriction base="xs:IDREF">
//             <xs:pattern value="R[\d\-_a-zA-Z]+" />
//           </xs:restriction>
//         </xs:simpleType>
//       </xs:element>
//       <xs:element name="ReleaseId" type="ern:ReleaseId" />
//     </xs:choice>
//     <xs:element name="Duration" minOccurs="0" type="xs:duration" />
//     <xs:element name="IsHiddenResource" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsBonusResource" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsInstantGratificationResource" minOccurs="0" type="xs:boolean" />
//     <xs:element name="IsPreOrderIncentiveResource" minOccurs="0" type="xs:boolean" />
//   </xs:sequence>
// </xs:complexType>
export type ExtendedResourceGroupContentItem =
  Partial<ResourceGroupContentItemIdentifierChoice> & {
    sequenceNumber?: number;
    sequenceSubNumber?: number;
    resourceType?: ResourceType[];
    releaseResourceReference: ReleaseResourceReference;
    linkedReleaseResourceReference?: LinkedReleaseResourceReference[];
    duration?: number;
    isHiddenResource?: boolean;
    isBonusResource?: boolean;
    isInstantGratificationResource?: boolean;
    isPreOrderIncentiveResource?: boolean;
  };

// <xs:choice>
//   <xs:element name="ResourceGroupContentItemReleaseReference">
//     <xs:simpleType>
//       <xs:restriction base="xs:IDREF">
//         <xs:pattern value="R[\d\-_a-zA-Z]+" />
//       </xs:restriction>
//     </xs:simpleType>
//   </xs:element>
//   <xs:element name="ReleaseId" type="ern:ReleaseId" />
// </xs:choice>
export type ResourceGroupContentItemIdentifierChoice =
  | {
      resourceGroupContentItemReleaseReference: ReleaseReference;
      releaseId?: never;
    }
  | { resourceGroupContentItemReleaseReference?: never; releaseId: ReleaseId };
