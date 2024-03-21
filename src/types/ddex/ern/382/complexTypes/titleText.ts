// <xs:complexType name="TitleText">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//         <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type TitleText = {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  value: string;
};
