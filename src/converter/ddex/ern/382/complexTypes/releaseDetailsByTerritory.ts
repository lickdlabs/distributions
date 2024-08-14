import { Ern382, Ern383 } from "../../../../../types";
import { convertResourceGroup } from "./resourceGroup";

export const convertReleaseDetailsByTerritory = (
  releaseDetailsByTerritory: Ern382.ReleaseDetailsByTerritory,
): Ern383.ReleaseDetailsByTerritory => ({
  ...releaseDetailsByTerritory,
  resourceGroup: releaseDetailsByTerritory.resourceGroup?.map((resourceGroup) =>
    convertResourceGroup(resourceGroup),
  ),
  character: undefined,
});
