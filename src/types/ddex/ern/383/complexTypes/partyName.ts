import { Name } from "./name";

// <xs:complexType name="PartyName">
//   <xs:sequence>
//     <xs:element name="FullName" type="ern:Name" />
//     <xs:element name="FullNameAsciiTranscribed" minOccurs="0" type="xs:string" />
//     <xs:element name="FullNameIndexed" minOccurs="0" type="ern:Name" />
//     <xs:element name="NamesBeforeKeyName" minOccurs="0" type="ern:Name" />
//     <xs:element name="KeyName" minOccurs="0" type="ern:Name" />
//     <xs:element name="NamesAfterKeyName" minOccurs="0" type="ern:Name" />
//     <xs:element name="AbbreviatedName" minOccurs="0" type="ern:Name" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type PartyName = {
  _attributes?: {
    languageAndScriptCode?: string;
  };

  fullName: Name;
  fullNameAsciiTranscribed?: string;
  fullNameIndexed?: Name;
  namesBeforeKeyName?: Name;
  keyName?: Name;
  namesAfterKeyName?: Name;
  abbreviatedName?: Name;
};
