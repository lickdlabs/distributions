import { Ern382 } from "../../../../../types";
import { parseCurrentTerritoryCode } from "./currentTerritoryCode";
import { parsePeriod } from "./period";
import { parseUserInterfaceType } from "./userInterfaceType";
import { parseUseType } from "./useType";

export const parseArtistDelegatedUsageRights = (
  object: any,
): Ern382.ArtistDelegatedUsageRights => ({
  useType: object.UseType.map((useType: any) => parseUseType(useType)),
  userInterfaceType: object.UserInterfaceType
    ? object.UserInterfaceType.map((userInterfaceType: any) =>
        parseUserInterfaceType(userInterfaceType),
      )
    : undefined,
  periodOfRightsDelegation: parsePeriod(object.PeriodOfRightsDelegation[0]),
  territoryOfRightsDelegation: object.TerritoryOfRightsDelegation.map(
    (territoryOfRightsDelegation: any) =>
      parseCurrentTerritoryCode(territoryOfRightsDelegation),
  ),
  membershipType: object.MembershipType[0],
});
