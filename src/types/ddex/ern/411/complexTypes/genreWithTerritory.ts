import { Avs411 } from "../../../avs";

// <xs:complexType name="GenreWithTerritory">
//   <xs:sequence>
//     <xs:element name="GenreText" type="xs:string" />
//     <xs:element name="SubGenre" minOccurs="0" type="xs:string" />
//   </xs:sequence>
//   <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//   <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//   <xs:attribute name="IsDefault" type="xs:boolean" />
// </xs:complexType>
export type GenreWithTerritory = {
  _attributes?: {
    languageAndScriptCode?: string;
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    isDefault?: boolean;
  };

  genreText: string;
  subGenre?: string;
};
