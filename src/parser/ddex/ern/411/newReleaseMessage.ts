import { Ern411 } from "../../../../types";
import { AbstractParser } from "./abstract";

export class NewReleaseMessageParser extends AbstractParser {
  public parse(object: any): Ern411.Ern<Ern411.Actions.NEW_RELEASE_MESSAGE> {
    return {
      version: 411,
      action: Ern411.Actions.NEW_RELEASE_MESSAGE,
      element: {
        _attributes: {
          releaseProfileVersionId: object.$.ReleaseProfileVersionId,
          releaseProfileVariantVersionId:
            object.$.ReleaseProfileVariantVersionId,
          languageAndScriptCode: object.$.LanguageAndScriptCode,
        },
        messageHeader: this.parseMessageHeader(object.MessageHeader[0]),
      },
    };
  }
}
