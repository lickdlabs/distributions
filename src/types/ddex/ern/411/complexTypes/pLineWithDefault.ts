import { Avs411 } from "../../../avs";

// <xs:complexType name="PLineWithDefault">
//   <xs:sequence>
//     <xs:element name="Year" minOccurs="0" type="xs:gYear" />
//     <xs:element name="PLineCompany" minOccurs="0" type="xs:string" />
//     <xs:element name="PLineText" type="xs:string" />
//   </xs:sequence>
//   <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//   <xs:attribute name="IsDefault" type="xs:boolean" />
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
// </xs:complexType>
export type PLineWithDefault = {
  _attributes?: {
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    isDefault?: boolean;
    languageAndScriptCode?: string;
  };

  year?: string;
  pLineCompany?: string;
  pLineText: string;
};
