import { Avs20200108 } from "../../../avs";
import { LocalCollectionAnchorReference } from "./localCollectionAnchorReference";

// <xs:complexType name="ReleaseCollectionReference">
//   <xs:simpleContent>
//     <xs:extension base="ern:ddex_LocalCollectionAnchorReference">
//       <xs:attribute name="ReleaseResourceType" type="avs:ReleaseResourceType" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type ReleaseCollectionReference = {
  _attributes?: {
    releaseResourceType?: Avs20200108.ReleaseResourceType;
  };

  value: LocalCollectionAnchorReference;
};
