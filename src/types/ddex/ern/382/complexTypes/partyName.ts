import { Name } from "./name";

// <xs:complexType name="PartyName">
export type PartyName = {
  _attributes: {
    // <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
    languageAndScriptCode?: string;
  };

  // <xs:element name="FullName" type="ern:Name" />
  fullName: Name;

  // <xs:element name="FullNameAsciiTranscribed" minOccurs="0" type="xs:string" />
  fullNameAsciiTranscribed?: string;

  // <xs:element name="FullNameIndexed" minOccurs="0" type="ern:Name" />
  fullNameIndexed?: Name;

  // <xs:element name="NamesBeforeKeyName" minOccurs="0" type="ern:Name" />
  namesBeforeKeyName?: Name;

  // <xs:element name="KeyName" minOccurs="0" type="ern:Name" />
  keyName?: Name;

  // <xs:element name="NamesAfterKeyName" minOccurs="0" type="ern:Name" />
  namesAfterKeyName?: Name;

  // <xs:element name="AbbreviatedName" minOccurs="0" type="ern:Name" />
  abbreviatedName?: Name;
};
