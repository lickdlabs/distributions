import { Avs411 } from "../../../avs";

// <xs:complexType name="DisplayArtistRole">
//   <xs:simpleContent>
//     <xs:extension base="avs:DisplayArtistRole">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type DisplayArtistRole = {
  _attributes?: {
    namespace?: string;
    userDefinedValue?: string;
  };

  value: Avs411.DisplayArtistRole;
};
