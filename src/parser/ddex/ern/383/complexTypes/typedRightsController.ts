import { Ern383 } from "../../../../../types";
import { parseAllTerritoryCode } from "./allTerritoryCode";
import { parsePartyChoice } from "./partyChoice";
import { parseRightShareChoice } from "./rightShareChoice";

export const parseTypedRightsController = (
  object: any,
): Ern383.TypedRightsController => ({
  _attributes: object.$
    ? {
        sequenceNumber: object.$.SequenceNumber || undefined,
      }
    : undefined,
  ...parsePartyChoice(object),
  rightsControllerRole: object.RightsControllerRole
    ? object.RightsControllerRole[0]
    : undefined,
  ...parseRightShareChoice(object),
  rightsControllerType: object.RightsControllerType
    ? object.RightsControllerType[0]
    : undefined,
  territoryOfRegistration: object.TerritoryOfRegistration
    ? parseAllTerritoryCode(object.TerritoryOfRegistration[0])
    : undefined,
  startDate: object.StartDate ? new Date(object.StartDate[0]) : undefined,
  endDate: object.EndDate ? new Date(object.EndDate[0]) : undefined,
});
