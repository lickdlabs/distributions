import { Ern382 } from "../../../../../types";
import { parseAllTerritoryCode } from "./allTerritoryCode";
import { parseEventDate } from "./eventDate";

export const parsePerformance = (object: any): Ern382.Performance => ({
  territory: object.Territory
    ? object.Territory.map((territory: any) => parseAllTerritoryCode(territory))
    : undefined,
  date: object.Date ? parseEventDate(object.Date[0]) : undefined,
});
