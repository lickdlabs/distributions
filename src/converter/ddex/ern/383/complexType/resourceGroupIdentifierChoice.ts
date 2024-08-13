import { Ern383, Ern411 } from "../../../../../types";
import { convertReleaseId } from "./releaseId";

export const convertResourceGroupIdentifierChoice = (
  resourceGroup: Ern383.ResourceGroup,
): Partial<Ern411.ResourceGroupIdentifierChoice> => {
  if (resourceGroup.resourceGroupReleaseReference) {
    return {
      resourceGroupReleaseReference:
        resourceGroup.resourceGroupReleaseReference,
    };
  }

  if (resourceGroup.releaseId) {
    return {
      releaseId: convertReleaseId(resourceGroup.releaseId),
    };
  }

  return {};
};
