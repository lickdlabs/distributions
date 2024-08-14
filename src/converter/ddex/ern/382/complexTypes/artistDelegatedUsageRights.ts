import { Ern382, Ern383 } from "../../../../../types";

export const convertArtistDelegatedUsageRights = (
  artistDelegatedUsageRights: Ern382.ArtistDelegatedUsageRights,
): Ern383.ArtistDelegatedUsageRights => ({
  ...artistDelegatedUsageRights,
  territoryOfRightsDelegation:
    artistDelegatedUsageRights.territoryOfRightsDelegation.map(
      (territoryOfRightsDelegation) =>
        territoryOfRightsDelegation as unknown as Ern383.AllTerritoryCode,
    ),
});
