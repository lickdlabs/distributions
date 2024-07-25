import { CurrentTerritoryCode } from "./currentTerritoryCode";

export type TerritoryCodeChoice =
  | { territoryCode: CurrentTerritoryCode[]; excludedTerritoryCode?: never }
  | { territoryCode?: never; excludedTerritoryCode: CurrentTerritoryCode[] };
