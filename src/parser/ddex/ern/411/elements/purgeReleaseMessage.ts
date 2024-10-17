import { Ern411, ErnVersions } from "../../../../../types";
import { parseMessageHeader } from "../complexTypes";

export const parsePurgeReleaseMessage = (
  object: any,
): Ern411.ErnPurgeReleaseMessage => ({
  type: "ddex",
  version: ErnVersions.ERN_411,
  action: Ern411.Actions.PURGE_RELEASE_MESSAGE,
  element: {
    _attributes: {
      languageAndScriptCode: object.$.LanguageAndScriptCode,
    },
    messageHeader: parseMessageHeader(object.MessageHeader[0]),
  },
});
