import { Ern383 } from "../../../../types";
import { AbstractParser } from "./abstract";

export class CatalogListMessageParser extends AbstractParser {
  public parse(object: any): Ern383.ErnCatalogListMessage {
    return {
      type: "ddex",
      version: 383,
      action: "CatalogListMessage",
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
