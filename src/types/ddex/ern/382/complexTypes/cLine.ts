// <xs:complexType name="CLine">
//   <xs:sequence>
//     <xs:element name="Year" minOccurs="0" type="xs:gYear" />
//     <xs:element name="CLineCompany" minOccurs="0" type="xs:string" />
//     <xs:element name="CLineText" type="xs:string" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type CLine = {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  year?: string;
  cLineCompany?: string;
  cLineText: string;
};
