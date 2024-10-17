import { Ern382, Ern383, ErnVersions } from "../../../../../types";
import { convertReleaseList, convertResourceList } from "../complexTypes";

export const convertNewReleaseMessage = (
  ern: Ern382.ErnNewReleaseMessage,
): Ern383.ErnNewReleaseMessage => ({
  ...ern,
  version: ErnVersions.ERN_383,
  action: Ern383.Actions.NEW_RELEASE_MESSAGE,
  element: {
    ...ern.element,
    resourceList: convertResourceList(ern.element.resourceList),
    releaseList: convertReleaseList(ern.element.releaseList),
  },
});
