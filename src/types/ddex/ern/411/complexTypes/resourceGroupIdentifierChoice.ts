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
      resourceGroupReleaseReference: `${string & {
        __brand: "R[\\d\\-_a-zA-Z]+";
      }}`;
      releaseId?: never;
    }
  | { resourceGroupReleaseReference?: never; releaseId: ReleaseId };
