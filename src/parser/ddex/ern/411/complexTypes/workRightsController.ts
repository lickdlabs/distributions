import { Ern411 } from "../../../../../types";
import { parseAllTerritoryCode } from "./allTerritoryCode";
import { parseRightShareChoice } from "./rightShareChoice";

export const parseWorkRightsController = (
  object: any,
): Ern411.WorkRightsController => ({
  rightsControllerPartyReference: object.RightsControllerPartyReference[0],
  rightsControllerRole: object.RightsControllerRole
    ? object.RightsControllerRole.map(
        (rightsControllerRole: string) => rightsControllerRole,
      )
    : undefined,
  rightsControllerType: object.RightsControllerType
    ? object.RightsControllerType[0]
    : undefined,
  ...parseRightShareChoice(object),
  territory: object.Territory
    ? object.Territory.map((territory: any) => parseAllTerritoryCode(territory))
    : undefined,
  startDate: object.StartDate ? new Date(object.StartDate[0]) : undefined,
  endDate: object.EndDate ? new Date(object.EndDate[0]) : undefined,
});
