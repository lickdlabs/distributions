// <xs:complexType name="ProprietaryId">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//       <xs:attribute name="Namespace" type="xs:string" use="required" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type ProprietaryId = {
  _attributes: {
    namespace: string;
  };

  value: string;
};
