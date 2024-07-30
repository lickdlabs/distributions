import { Ern382, Ern383 } from "../../../../../types";
import { convertDetailedResourceContributor } from "./detailedResourceContributor";

export const convertResourceGroup = (
  ern: Ern382.ResourceGroup,
): Ern383.ResourceGroup => ({
  ...ern,
  resourceContributor: ern.resourceContributor?.map((resourceContributor) =>
    convertDetailedResourceContributor(resourceContributor),
  ),
  resourceGroup: ern.resourceGroup?.map((resourceGroup) =>
    convertResourceGroup(resourceGroup),
  ),
});
