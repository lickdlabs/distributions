import { Ern383, ErnVersions } from "../../../../../types";
import { parseMessageHeader } from "../complexTypes";

export const parsePurgeReleaseMessage = (
  object: any,
): Ern383.ErnPurgeReleaseMessage => ({
  type: "ddex",
  version: ErnVersions.ERN_383,
  action: Ern383.Actions.PURGE_RELEASE_MESSAGE,
  element: {
    _attributes: {
      messageSchemaVersionId: object.$.MessageSchemaVersionId,
      languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
    },
    messageHeader: parseMessageHeader(object.MessageHeader[0]),
  },
});
