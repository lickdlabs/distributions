import { Ern382, Ern383 } from "../../../../../types";
import { convertArtistDelegatedUsageRights } from "./artistDelegatedUsageRights";

export const convertDetailedResourceContributor = (
  detailedResourceContributor: Ern382.DetailedResourceContributor,
): Ern383.DetailedResourceContributor => ({
  ...detailedResourceContributor,
  artistDelegatedUsageRights:
    detailedResourceContributor.artistDelegatedUsageRights
      ? convertArtistDelegatedUsageRights(
          detailedResourceContributor.artistDelegatedUsageRights,
        )
      : undefined,
  nationality: detailedResourceContributor.nationality
    ? detailedResourceContributor.nationality.map(
        (nationality) => nationality as unknown as Ern383.AllTerritoryCode,
      )
    : undefined,
  citizenship: detailedResourceContributor.citizenship
    ? (detailedResourceContributor.citizenship as unknown as Ern383.AllTerritoryCode)
    : undefined,
});
