import { Ern411 } from "../../../../../types";
import { parseMessageHeader } from "../complexTypes";

export const parsePurgeReleaseMessage = (
  object: any,
): Ern411.PurgeReleaseMessage => {
  return {
    _attributes: {
      languageAndScriptCode: object.$.LanguageAndScriptCode,
    },
    messageHeader: parseMessageHeader(object.MessageHeader[0]),
  };
};
