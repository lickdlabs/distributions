// <xs:complexType name="PartyId">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="IsDPID" type="xs:boolean" />
//       <xs:attribute name="IsISNI" type="xs:boolean" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type PartyId = {
  _attributes?: {
    namespace?: string;
    isDpid?: boolean;
    isIsni?: boolean;
  };

  value: string;
};
