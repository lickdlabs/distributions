import { Ern411, ErnVersions } from "../../../../../types";
import {
  parseMessageHeader,
  parsePartyList,
  parseResourceList,
} from "../complexTypes";
import { parseReleaseList } from "../complexTypes/releaseList";

export const parseNewReleaseMessage = (
  object: any,
): Ern411.ErnNewReleaseMessage => ({
  type: "ddex",
  version: ErnVersions.ERN_411,
  action: Ern411.Actions.NEW_RELEASE_MESSAGE,
  element: {
    _attributes: {
      releaseProfileVersionId: object.$.ReleaseProfileVersionId,
      releaseProfileVariantVersionId: object.$.ReleaseProfileVariantVersionId,
      languageAndScriptCode: object.$.LanguageAndScriptCode,
    },
    messageHeader: parseMessageHeader(object.MessageHeader[0]),
    partyList: parsePartyList(object.PartyList[0]),
    resourceList: parseResourceList(object.ResourceList[0]),
    releaseList: parseReleaseList(object.ReleaseList[0]),
  },
});
