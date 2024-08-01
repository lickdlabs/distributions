import { Ern411 } from "../../../../../types";
import { parseReleaseId } from "./releaseId";

export const parseResourceGroupIdentifierChoice = (
  object: any,
): Partial<Ern411.ResourceGroupIdentifierChoice> => {
  if (object.ResourceGroupReleaseReference) {
    return {
      resourceGroupReleaseReference: object.ResourceGroupReleaseReference[0],
    };
  }

  if (object.ReleaseId) {
    return {
      releaseId: parseReleaseId(object.ReleaseId[0]),
    };
  }

  return {};
};
