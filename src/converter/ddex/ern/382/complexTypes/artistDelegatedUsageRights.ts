import { Ern382, Ern383 } from "../../../../../types";

export const convertArtistDelegatedUsageRights = (
  ern: Ern382.ArtistDelegatedUsageRights,
): Ern383.ArtistDelegatedUsageRights => ({
  ...ern,
  territoryOfRightsDelegation: ern.territoryOfRightsDelegation.map(
    (territoryOfRightsDelegation) =>
      territoryOfRightsDelegation as unknown as Ern383.AllTerritoryCode,
  ),
});
