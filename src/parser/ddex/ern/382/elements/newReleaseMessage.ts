import { Ern382 } from "../../../../../types";
import { parseMessageHeader } from "../complexTypes";

export const parseNewReleaseMessage = (
  object: any,
): Ern382.NewReleaseMessage => {
  return {
    _attributes: {
      messageSchemaVersionId: object.$.MessageSchemaVersionId,
      businessProfileVersionId: object.$.BusinessProfileVersionId || undefined,
      releaseProfileVersionId: object.$.ReleaseProfileVersionId || undefined,
      languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
    },
    messageHeader: parseMessageHeader(object.MessageHeader[0]),
    updateIndicator: object.UpdateIndicator
      ? object.UpdateIndicator[0]
      : undefined,
    isBackfill: object.IsBackfill ? object.IsBackfill[0] === "true" : undefined,
  };
};
