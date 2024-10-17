import { Ern383, ErnVersions } from "../../../../../types";
import { parseMessageHeader } from "../complexTypes";

export const parseCatalogListMessage = (
  object: any,
): Ern383.ErnCatalogListMessage => ({
  type: "ddex",
  version: ErnVersions.ERN_383,
  action: Ern383.Actions.CATALOG_LIST_MESSAGE,
  element: {
    _attributes: {
      messageSchemaVersionId: object.$.MessageSchemaVersionId,
      businessProfileVersionId: object.$.BusinessProfileVersionId || undefined,
      releaseProfileVersionId: object.$.ReleaseProfileVersionId || undefined,
      languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
    },
    messageHeader: parseMessageHeader(object.MessageHeader[0]),
  },
});
