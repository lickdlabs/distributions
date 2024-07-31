import { Avs411 } from "../../../avs";

// <xs:complexType name="EventDate">
//   <xs:simpleContent>
//     <xs:extension base="ern:ddex_IsoDate">
//       <xs:attribute name="IsApproximate" type="xs:boolean" />
//       <xs:attribute name="IsBefore" type="xs:boolean" />
//       <xs:attribute name="IsAfter" type="xs:boolean" />
//       <xs:attribute name="ApplicableTerritoryCode" type="avs:AllTerritoryCode" />
//       <xs:attribute name="LocationDescription" type="xs:string" />
//       <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type EventDate = {
  _attributes?: {
    isApproximate?: boolean;
    isBefore?: boolean;
    isAfter?: boolean;
    applicableTerritoryCode?: Avs411.AllTerritoryCode;
    locationDescription?: string;
    languageAndScriptCode?: string;
  };

  value: Date;
};
