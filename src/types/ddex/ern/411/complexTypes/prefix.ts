// <xs:complexType name="Prefix">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//       <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type Prefix = {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  value: string;
};
