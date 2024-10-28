import { Avs20200108 } from "../../../avs";
import { ResourceReference } from "../references";

// <xs:complexType name="ReleaseResourceReference">
//   <xs:simpleContent>
//     <xs:extension base="ern:ddex_LocalResourceAnchorReference">
//       <xs:attribute name="ReleaseResourceType" type="avs:ReleaseResourceType" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type ReleaseResourceReference = {
  _attributes?: {
    releaseResourceType?: Avs20200108.ReleaseResourceType;
  };

  value: ResourceReference;
};
