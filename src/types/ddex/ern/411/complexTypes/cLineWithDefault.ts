import { Avs411 } from "../../../avs";

// <xs:complexType name="CLineWithDefault">
//   <xs:sequence>
//     <xs:element name="Year" minOccurs="0" type="xs:gYear" />
//     <xs:element name="CLineCompany" minOccurs="0" type="xs:string" />
//     <xs:element name="CLineText" type="xs:string" />
//   </xs:sequence>
//   <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//   <xs:attribute name="IsDefault" type="xs:boolean" />
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type CLineWithDefault = {
  _attributes?: {
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    isDefault?: boolean;
    languageAndScriptCode?: string;
  };

  year?: string;
  cLineCompany?: string;
  cLineText: string;
};
