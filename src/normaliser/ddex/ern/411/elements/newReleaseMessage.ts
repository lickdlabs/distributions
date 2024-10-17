import { Ern411 } from "../../../../../types";
import { normalisePartyList, normaliseResourceList } from "../complexTypes";

export const normaliseNewReleaseMessage = (
  ern: Ern411.ErnNewReleaseMessage,
): void => {
  normalisePartyList(ern.element.partyList);
  normaliseResourceList(ern.element.resourceList, ern.element.releaseList);
};
