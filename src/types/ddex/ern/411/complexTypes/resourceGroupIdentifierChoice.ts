import { ReleaseReference } from "../references";
import { ReleaseId } from "./releaseId";

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
export type ResourceGroupIdentifierChoice =
  | {
      resourceGroupReleaseReference: ReleaseReference;
      releaseId?: never;
    }
  | { resourceGroupReleaseReference?: never; releaseId: ReleaseId };
