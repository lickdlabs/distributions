import { Ern411 } from "../../../../types";
import { AbstractParser } from "./abstract";

export class PurgeReleaseMessageParser extends AbstractParser {
  public parse(object: any): Ern411.ErnPurgeReleaseMessage {
    return {
      type: "ddex",
      version: 411,
      action: "PurgeReleaseMessage",
      element: {
        _attributes: {
          languageAndScriptCode: object.$.LanguageAndScriptCode,
        },
        messageHeader: this.parseMessageHeader(object.MessageHeader[0]),
      },
    };
  }
}
