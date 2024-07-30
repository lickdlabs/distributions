import { Ern382, Ern383 } from "../../../../../types";
import { convertArtistDelegatedUsageRights } from "./artistDelegatedUsageRights";

export const convertDetailedResourceContributor = (
  ern: Ern382.DetailedResourceContributor,
): Ern383.DetailedResourceContributor => ({
  ...ern,
  artistDelegatedUsageRights: ern.artistDelegatedUsageRights
    ? convertArtistDelegatedUsageRights(ern.artistDelegatedUsageRights)
    : undefined,
  nationality: ern.nationality
    ? ern.nationality.map(
        (nationality) => nationality as unknown as Ern383.AllTerritoryCode,
      )
    : undefined,
  citizenship: ern.citizenship
    ? (ern.citizenship as unknown as Ern383.AllTerritoryCode)
    : undefined,
});
