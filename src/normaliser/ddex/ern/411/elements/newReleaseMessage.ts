import { Ern411 } from "../../../../../types";
import { normaliseResourceList } from "../complexTypes";

export const normaliseNewReleaseMessage = (
  ern: Ern411.ErnNewReleaseMessage,
): void => {
  normaliseResourceList(ern.element.resourceList, ern.element.releaseList);
};
