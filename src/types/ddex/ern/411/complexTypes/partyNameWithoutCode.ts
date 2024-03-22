// <xs:complexType name="PartyNameWithoutCode">
//   <xs:sequence>
//     <xs:element name="FullName" type="xs:string" />
//     <xs:element name="FullNameAsciiTranscribed" minOccurs="0" type="xs:string" />
//     <xs:element name="FullNameIndexed" minOccurs="0" type="xs:string" />
//     <xs:element name="NamesBeforeKeyName" minOccurs="0" type="xs:string" />
//     <xs:element name="KeyName" minOccurs="0" type="xs:string" />
//     <xs:element name="NamesAfterKeyName" minOccurs="0" type="xs:string" />
//     <xs:element name="AbbreviatedName" minOccurs="0" type="xs:string" />
//   </xs:sequence>
// </xs:complexType>
export type PartyNameWithoutCode = {
  fullName: string;
  fullNameAsciiTranscribed?: string;
  fullNameIndexed?: string;
  namesBeforeKeyName?: string;
  keyName?: string;
  namesAfterKeyName?: string;
  abbreviatedName?: string;
};
