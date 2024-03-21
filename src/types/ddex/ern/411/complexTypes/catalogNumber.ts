// <xs:complexType name="CatalogNumber">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//       <xs:attribute name="Namespace" type="xs:string" use="required" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type CatalogNumber = {
  _attributes: {
    namespace: string;
  };

  value: string;
};
