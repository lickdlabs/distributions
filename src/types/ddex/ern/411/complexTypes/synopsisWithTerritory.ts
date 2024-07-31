import { Avs411 } from "../../../avs";

// <xs:complexType name="SynopsisWithTerritory">
//   <xs:simpleContent>
//     <xs:extension base="xs:string">
//       <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//       <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//       <xs:attribute name="IsDefault" type="xs:boolean" />
//       <xs:attribute name="IsShortSynopsis" type="xs:boolean" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type SynopsisWithTerritory = {
  _attributes?: {
    languageAndScriptCode?: string;
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
    isDefault?: boolean;
    isShortSynopsis?: boolean;
  };

  value: string;
};