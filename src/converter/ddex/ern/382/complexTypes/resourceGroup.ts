import { Ern382, Ern383 } from "../../../../../types";
import { convertDetailedResourceContributor } from "./detailedResourceContributor";

export const convertResourceGroup = (
  resourceGroup: Ern382.ResourceGroup,
): Ern383.ResourceGroup => ({
  ...resourceGroup,
  resourceContributor: resourceGroup.resourceContributor?.map(
    (resourceContributor) =>
      convertDetailedResourceContributor(resourceContributor),
  ),
  resourceGroup: resourceGroup.resourceGroup?.map((resourceGroup) =>
    convertResourceGroup(resourceGroup),
  ),
});
