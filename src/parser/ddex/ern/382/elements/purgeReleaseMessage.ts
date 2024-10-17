import { Ern382, ErnVersions } from "../../../../../types";
import { parseMessageHeader } from "../complexTypes";

export const parsePurgeReleaseMessage = (
  object: any,
): Ern382.ErnPurgeReleaseMessage => ({
  type: "ddex",
  version: ErnVersions.ERN_382,
  action: Ern382.Actions.PURGE_RELEASE_MESSAGE,
  element: {
    _attributes: {
      messageSchemaVersionId: object.$.MessageSchemaVersionId,
      languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
    },
    messageHeader: parseMessageHeader(object.MessageHeader[0]),
  },
});
