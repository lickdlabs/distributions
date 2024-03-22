import { Ern383 } from "../../../../types";
import { AbstractParser } from "./abstract";

export class CatalogListMessageParser extends AbstractParser {
  public parse(object: any): Ern383.Ern<Ern383.Actions.CATALOG_LIST_MESSAGE> {
    return {
      version: 383,
      action: Ern383.Actions.CATALOG_LIST_MESSAGE,
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
