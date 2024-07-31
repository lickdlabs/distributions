import { Avs411 } from "../../../avs";

// <xs:complexType name="EventDateWithoutFlags">
//   <xs:simpleContent>
//     <xs:extension base="ern:ddex_IsoDate">
//       <xs:attribute name="IsApproximate" type="xs:boolean" />
//       <xs:attribute name="ApplicableTerritoryCode" type="avs:AllTerritoryCode" />
//       <xs:attribute name="LocationDescription" type="xs:string" />
//       <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type EventDateWithoutFlags = {
  _attributes?: {
    isApproximate?: boolean;
    applicableTerritoryCode?: Avs411.AllTerritoryCode;
    locationDescription?: string;
    languageAndScriptCode?: string;
  };

  value: Date;
};
