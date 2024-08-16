import { Avs411, Ern383, Ern411 } from "../../../../../types";
import { convertCurrentTerritoryCode } from "./currentTerritoryCode";
import { convertPeriodFromDates } from "./period";

export const convertDelegatedUsageRights = (
  resourceRightsController: Ern383.TypedRightsController,
): Ern411.DelegatedUsageRights => ({
  useType: [
    {
      value: Avs411.UseType.UNKNOWN,
    },
  ],
  periodOfRightsDelegation:
    resourceRightsController.startDate || resourceRightsController.endDate
      ? convertPeriodFromDates({
          startDate: resourceRightsController.startDate,
          endDate: resourceRightsController.endDate,
        })
      : undefined,
  territoryOfRightsDelegation: resourceRightsController.territoryOfRegistration
    ? [
        convertCurrentTerritoryCode(
          resourceRightsController.territoryOfRegistration,
        ),
      ]
    : undefined,
});
