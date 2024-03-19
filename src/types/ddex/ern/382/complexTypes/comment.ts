// <xs:complexType name="Comment">
export type Comment = {
  _attributes: {
    // <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
    languageAndScriptCode?: string;
  };

  // <xs:extension base="xs:string">
  value: string;
};
