import { Avs411 } from "../../../avs";

// <xs:complexType name="DisplayArtistNameWithDefault">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//       <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//       <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//       <xs:attribute name="IsDefault" type="xs:boolean" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type DisplayArtistNameWithDefault = {
  _attributes?: {
    languageAndScriptCode?: string;
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    isDefault?: boolean;
  };

  value: string;
};
