import { Avs20200108 } from "../../../avs";

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

  value: `${string & { __brand: "A[\\d\\-_a-zA-Z]+" }}`;
};
