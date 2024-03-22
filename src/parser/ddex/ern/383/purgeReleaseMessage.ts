import { Ern383 } from "../../../../types";
import { AbstractParser } from "./abstract";

export class PurgeReleaseMessageParser extends AbstractParser {
  public parse(object: any): Ern383.ErnPurgeReleaseMessage {
    return {
      type: "ddex",
      version: 383,
      action: "PurgeReleaseMessage",
      element: {
        _attributes: {
          messageSchemaVersionId: object.$.MessageSchemaVersionId,
          languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        },
        messageHeader: this.parseMessageHeader(object.MessageHeader[0]),
      },
    };
  }
}
