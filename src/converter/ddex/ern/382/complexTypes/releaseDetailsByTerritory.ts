import { Ern382, Ern383 } from "../../../../../types";
import { convertResourceGroup } from "./resourceGroup";

export const convertReleaseDetailsByTerritory = (
  ern: Ern382.ReleaseDetailsByTerritory,
): Ern383.ReleaseDetailsByTerritory => ({
  ...ern,
  resourceGroup: ern.resourceGroup?.map((resourceGroup) =>
    convertResourceGroup(resourceGroup),
  ),
});
