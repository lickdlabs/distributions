import { Ern411 } from "../../../../../types";
import { parseMessageHeader } from "../complexTypes";

export const parseNewReleaseMessage = (
  object: any,
): Ern411.NewReleaseMessage => {
  return {
    _attributes: {
      releaseProfileVersionId: object.$.ReleaseProfileVersionId,
      releaseProfileVariantVersionId: object.$.ReleaseProfileVariantVersionId,
      languageAndScriptCode: object.$.LanguageAndScriptCode,
    },
    messageHeader: parseMessageHeader(object.MessageHeader[0]),
  };
};
