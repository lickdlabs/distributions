import { Avs411 } from "../../../avs";
import { Name } from "./name";

// <xs:complexType name="PartyNameWithTerritory">
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
//   <xs:attribute name="IsNickname" type="xs:boolean" />
//   <xs:attribute name="IsStageName" type="xs:boolean" />
//   <xs:attribute name="IsLegalName" type="xs:boolean" />
//   <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
// </xs:complexType>
export type PartyNameWithTerritory = {
  _attributes?: {
    languageAndScriptCode?: string;
    isNickname?: boolean;
    isStageName?: boolean;
    isLegalName?: boolean;
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
  };

  fullName: Name;
  fullNameAsciiTranscribed?: string;
  fullNameIndexed?: Name;
  namesBeforeKeyName?: Name;
  keyName?: Name;
  namesAfterKeyName?: Name;
  abbreviatedName?: Name;
};
