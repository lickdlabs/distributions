import { Ern382 } from "../../../../types";
import { AbstractParser } from "./abstract";

export class PurgeReleaseMessageParser extends AbstractParser {
  public parse(object: any): Ern382.Ern<Ern382.Actions.PURGE_RELEASE_MESSAGE> {
    return {
      version: 382,
      action: Ern382.Actions.PURGE_RELEASE_MESSAGE,
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
