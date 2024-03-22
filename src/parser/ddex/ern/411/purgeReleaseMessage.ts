import { Ern411 } from "../../../../types";
import { AbstractParser } from "./abstract";

export class PurgeReleaseMessageParser extends AbstractParser {
  public parse(object: any): Ern411.Ern<Ern411.Actions.PURGE_RELEASE_MESSAGE> {
    return {
      type: "ddex",
      version: 411,
      action: Ern411.Actions.PURGE_RELEASE_MESSAGE,
      element: {
        _attributes: {
          languageAndScriptCode: object.$.LanguageAndScriptCode,
        },
        messageHeader: this.parseMessageHeader(object.MessageHeader[0]),
      },
    };
  }
}
