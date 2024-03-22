import { Ern382 } from "../../../../types";
import { AbstractParser } from "./abstract";

export class PurgeReleaseMessageParser extends AbstractParser {
  public parse(object: any): Ern382.ErnPurgeReleaseMessage {
    return {
      type: "ddex",
      version: 382,
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
