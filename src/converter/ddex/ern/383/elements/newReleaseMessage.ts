import { Ern383, Ern411 } from "../../../../../types";
import {
  convertMessageHeader,
  convertPartyList,
  convertReleaseList,
  convertResourceList,
} from "../complexType";

export const convertNewReleaseMessage = (
  ern: Ern383.ErnNewReleaseMessage,
): Ern411.ErnNewReleaseMessage => {
  const partyList = convertPartyList(
    ern.element.messageHeader,
    ern.element.releaseList.release,
  );

  return {
    type: "ddex",
    version: 411,
    action: Ern411.Actions.NEW_RELEASE_MESSAGE,
    element: {
      _attributes: {
        languageAndScriptCode:
          ern.element._attributes.languageAndScriptCode || "en",
      },
      messageHeader: convertMessageHeader(ern.element.messageHeader),
      partyList,
      resourceList: convertResourceList(ern.element.resourceList),
      releaseList: convertReleaseList(partyList.party, ern.element.releaseList),
    },
  };
};
