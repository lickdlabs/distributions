import { Ern411 } from "../../../../../types";
import { parseCurrentTerritoryCode } from "./currentTerritoryCode";
import { parsePeriod } from "./period";
import { parseUseType } from "./useType";

export const parseDelegatedUsageRights = (
  object: any,
): Ern411.DelegatedUsageRights => ({
  useType: object.UseType.map((useType: any) => parseUseType(useType)),
  periodOfRightsDelegation: object.PeriodOfRightsDelegation
    ? parsePeriod(object.PeriodOfRightsDelegation[0])
    : undefined,
  territoryOfRightsDelegation: object.TerritoryOfRightsDelegation
    ? object.TerritoryOfRightsDelegation.map(
        (territoryOfRightsDelegation: any) =>
          parseCurrentTerritoryCode(territoryOfRightsDelegation),
      )
    : undefined,
});
