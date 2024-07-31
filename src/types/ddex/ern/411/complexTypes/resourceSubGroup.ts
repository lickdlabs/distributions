import { Avs411 } from "../../../avs";
import { AdditionalTitle } from "./additionalTitle";
import { CarrierType } from "./carrierType";
import { DisplayArtist } from "./displayArtist";
import { DisplaySequenceChoice } from "./displaySequenceChoice";
import { DisplayTitle } from "./displayTitle";
import { DisplayTitleText } from "./displayTitleText";
import { LinkedReleaseResourceReference } from "./linkedReleaseResourceReference";
import { ReleaseId } from "./releaseId";
import { ResourceGroupContentItem } from "./resourceGroupContentItem";

// <xs:complexType name="ResourceSubGroup">
//   <xs:sequence>
//     <xs:element name="DisplayTitleText" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitleText" />
//     <xs:element name="DisplayTitle" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayTitle" />
//     <xs:element name="AdditionalTitle" minOccurs="0" maxOccurs="unbounded" type="ern:AdditionalTitle" />
//     <xs:element name="SequenceNumber" minOccurs="0" type="xs:integer" />
//     <xs:choice minOccurs="0">
//       <xs:element name="NoDisplaySequence" type="xs:boolean" />
//       <xs:element name="DisplaySequence" type="xs:string" />
//     </xs:choice>
//     <xs:element name="DisplayArtist" minOccurs="0" maxOccurs="unbounded" type="ern:DisplayArtist" />
//     <xs:element name="CarrierType" minOccurs="0" maxOccurs="unbounded" type="ern:CarrierType" />
//     <xs:element name="Duration" minOccurs="0" type="xs:duration" />
//     <xs:choice minOccurs="0">
//       <xs:element name="ResourceGroupReleaseReference">
//         <xs:simpleType>
//           <xs:restriction base="xs:IDREF">
//             <xs:pattern value="R[\d\-_a-zA-Z]+" />
//           </xs:restriction>
//         </xs:simpleType>
//       </xs:element>
//       <xs:element name="ReleaseId" type="ern:ReleaseId" />
//     </xs:choice>
//     <xs:element name="ResourceGroup" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceSubGroup" />
//     <xs:element name="ResourceGroupContentItem" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceGroupContentItem" />
//     <xs:element name="LinkedReleaseResourceReference" minOccurs="0" maxOccurs="unbounded" type="ern:LinkedReleaseResourceReference" />
//   </xs:sequence>
//   <xs:attribute name="ResourceGroupType" type="avs:ResourceGroupType" use="required" />
// </xs:complexType>
export type ResourceSubGroup = Partial<DisplaySequenceChoice> &
  Partial<ResourceGroupIdentifierChoice> & {
    _attributes: {
      resourceGroupType: Avs411.ResourceGroupType;
    };

    displayTitleText?: DisplayTitleText[];
    displayTitle?: DisplayTitle[];
    additionalTitle?: AdditionalTitle[];
    sequenceNumber?: number;
    displayArtist?: DisplayArtist[];
    carrierType?: CarrierType[];
    duration?: number;
    resourceGroup?: ResourceSubGroup[];
    resourceGroupContentItem: ResourceGroupContentItem[];
    LinkedReleaseResourceReference?: LinkedReleaseResourceReference[];
  };

// <xs:choice>
//   <xs:element name="ResourceGroupReleaseReference">
//     <xs:simpleType>
//       <xs:restriction base="xs:IDREF">
//         <xs:pattern value="R[\d\-_a-zA-Z]+" />
//       </xs:restriction>
//     </xs:simpleType>
//   </xs:element>
//   <xs:element name="ReleaseId" type="ern:ReleaseId" />
// </xs:choice>
type ResourceGroupIdentifierChoice =
  | {
      resourceGroupReleaseReference: `${string & {
        __brand: "[\\d\\-_a-zA-Z]+";
      }}`;
      releaseId?: never;
    }
  | { resourceGroupReleaseReference?: never; releaseId: ReleaseId };
