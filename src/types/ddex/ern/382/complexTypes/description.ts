// <xs:complexType name="Description">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//       <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type Description = {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  value: string;
};
