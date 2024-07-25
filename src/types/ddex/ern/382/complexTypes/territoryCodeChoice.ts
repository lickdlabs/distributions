import { CurrentTerritoryCode } from "./currentTerritoryCode";

// <xs:choice>
//   <xs:element name="TerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//   <xs:element name="ExcludedTerritoryCode" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
// </xs:choice>
export type TerritoryCodeChoice =
  | { territoryCode: CurrentTerritoryCode[]; excludedTerritoryCode?: never }
  | { territoryCode?: never; excludedTerritoryCode: CurrentTerritoryCode[] };
