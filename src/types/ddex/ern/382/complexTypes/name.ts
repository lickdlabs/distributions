// <xs:complexType name="Name">
export type Name = {
  _attributes: {
    // <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
    languageAndScriptCode?: string;
  };

  // <xs:extension base="xs:string">
  value: string;
};
