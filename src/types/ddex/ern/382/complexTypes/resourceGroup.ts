import { Artist } from "./artist";
import { CarrierType } from "./carrierType";
import { DetailedResourceContributor } from "./detailedResourceContributor";
import { ExtendedResourceGroupContentItem } from "./extendedResourceGroupContentItem";
import { IndirectResourceContributor } from "./indirectResourceContributor";
import { ReleaseId } from "./releaseId";
import { ResourceGroupResourceReferenceList } from "./resourceGroupResourceReferenceList";
import { Title } from "./title";

// <xs:complexType name="ResourceGroup">
//   <xs:sequence>
//     <xs:element name="Title" minOccurs="0" maxOccurs="unbounded" type="ern:Title" />
//     <xs:element name="SequenceNumber" minOccurs="0" type="xs:integer" />
//     <xs:element name="DisplayArtist" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
//     <xs:element name="DisplayConductor" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
//     <xs:element name="DisplayComposer" minOccurs="0" maxOccurs="unbounded" type="ern:Artist" />
//     <xs:element name="ResourceContributor" minOccurs="0" maxOccurs="unbounded" type="ern:DetailedResourceContributor" />
//     <xs:element name="IndirectResourceContributor" minOccurs="0" maxOccurs="unbounded" type="ern:IndirectResourceContributor" />
//     <xs:element name="CarrierType" minOccurs="0" maxOccurs="unbounded" type="ern:CarrierType" />
//     <xs:element name="ResourceGroup" minOccurs="0" maxOccurs="unbounded" type="ern:ResourceGroup" />
//     <xs:choice minOccurs="0">
//       <xs:element name="ResourceGroupContentItem" maxOccurs="unbounded" type="ern:ExtendedResourceGroupContentItem" />
//       <xs:element name="ResourceGroupResourceReferenceList" type="ern:ResourceGroupResourceReferenceList" />
//     </xs:choice>
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
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type ResourceGroup = Partial<ResourceGroupContentChoice> &
  Partial<ResourceGroupIdentifierChoice> & {
    _attributes?: {
      languageAndScriptCode?: string;
    };

    title?: Title[];
    sequenceNumber?: number;
    displayArtist?: Artist[];
    displayConductor?: Artist[];
    displayComposer?: Artist[];
    resourceContributor?: DetailedResourceContributor[];
    indirectResourceContributor?: IndirectResourceContributor[];
    carrierType?: CarrierType[];
    resourceGroup?: ResourceGroup[];
  };

// <xs:choice minOccurs="0">
//   <xs:element name="ResourceGroupContentItem" maxOccurs="unbounded" type="ern:ExtendedResourceGroupContentItem" />
//   <xs:element name="ResourceGroupResourceReferenceList" type="ern:ResourceGroupResourceReferenceList" />
// </xs:choice>
export type ResourceGroupContentChoice =
  | {
      resourceGroupContentItem: ExtendedResourceGroupContentItem[];
      resourceGroupResourceReferenceList?: never;
    }
  | {
      resourceGroupContentItem?: never;
      resourceGroupResourceReferenceList: ResourceGroupResourceReferenceList;
    };

// <xs:choice minOccurs="0">
//   <xs:element name="ResourceGroupReleaseReference">
//     <xs:simpleType>
//       <xs:restriction base="xs:IDREF">
//         <xs:pattern value="R[\d\-_a-zA-Z]+" />
//       </xs:restriction>
//     </xs:simpleType>
//   </xs:element>
//   <xs:element name="ReleaseId" type="ern:ReleaseId" />
// </xs:choice>
export type ResourceGroupIdentifierChoice =
  | {
      resourceGroupReleaseReference: `${string & {
        __brand: "R[\\d\\-_a-zA-Z]+";
      }}`;
      releaseId?: never;
    }
  | { resourceGroupReleaseReference?: never; releaseId: ReleaseId };
