import { Ern382, ErnVersions } from "../../../../../types";
import { parseMessageHeader } from "../complexTypes";

export const parseCatalogListMessage = (
  object: any,
): Ern382.ErnCatalogListMessage => ({
  type: "ddex",
  version: ErnVersions.ERN_382,
  action: Ern382.Actions.CATALOG_LIST_MESSAGE,
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
