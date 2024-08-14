import { Ern382, Ern383 } from "../../../../../types";
import { convertDetailedResourceContributor } from "./detailedResourceContributor";

export const convertImageDetailsByTerritory = (
  imageDetailsByTerritory: Ern382.ImageDetailsByTerritory,
): Ern383.ImageDetailsByTerritory => ({
  ...imageDetailsByTerritory,
  resourceContributor: imageDetailsByTerritory.resourceContributor?.map(
    (resourceContributor) =>
      convertDetailedResourceContributor(resourceContributor),
  ),
});
