import { Ern382 } from "../../../../../types";
import { parseMessageHeader } from "../complexTypes";

export const parseCatalogListMessage = (
  object: any,
): Ern382.CatalogListMessage => {
  return {
    _attributes: {
      messageSchemaVersionId: object.$.MessageSchemaVersionId,
      businessProfileVersionId: object.$.BusinessProfileVersionId || undefined,
      releaseProfileVersionId: object.$.ReleaseProfileVersionId || undefined,
      languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
    },
    messageHeader: parseMessageHeader(object.MessageHeader[0]),
  };
};
