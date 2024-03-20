import { Ern382 } from "../../../../../types";
import { parseMessageHeader } from "../complexTypes";

export const parsePurgeReleaseMessage = (
  object: any,
): Ern382.PurgeReleaseMessage => {
  return {
    _attributes: {
      messageSchemaVersionId: object.$.MessageSchemaVersionId,
      languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
    },
    messageHeader: parseMessageHeader(object.MessageHeader[0]),
  };
};
