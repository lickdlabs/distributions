// <xs:complexType name="TypedSubTitle">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//       <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//       <xs:attribute name="SubTitleType" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type TypedSubTitle = {
  _attributes?: {
    languageAndScriptCode?: string;
    subTitleType?: string;
  };

  value: string;
};
