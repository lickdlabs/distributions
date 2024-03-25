import { Ern382 } from "../../../../types";
import { AbstractParser } from "./abstract";

export class CatalogListMessageParser extends AbstractParser {
  public parse(object: any): Ern382.ErnCatalogListMessage {
    return {
      type: "ddex",
      version: 382,
      action: Ern382.Actions.CATALOG_LIST_MESSAGE,
      element: {
        _attributes: {
          messageSchemaVersionId: object.$.MessageSchemaVersionId,
          businessProfileVersionId:
            object.$.BusinessProfileVersionId || undefined,
          releaseProfileVersionId:
            object.$.ReleaseProfileVersionId || undefined,
          languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        },
        messageHeader: this.parseMessageHeader(object.MessageHeader[0]),
      },
    };
  }
}
