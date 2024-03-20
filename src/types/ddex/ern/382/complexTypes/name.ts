// <xs:complexType name="Name">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//         <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type Name = {
  _attributes: {
    languageAndScriptCode?: string;
  };

  value: string;
};
