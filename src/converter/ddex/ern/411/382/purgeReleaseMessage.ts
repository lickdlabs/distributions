import { Ern382, Ern411 } from "../../../../../types";
import { AbstractConverter } from "./abstract";

export class PurgeReleaseMessageConverter extends AbstractConverter {
  public convert(
    ern: Ern382.ErnPurgeReleaseMessage,
  ): Ern411.ErnPurgeReleaseMessage {
    return {
      type: "ddex",
      version: 411,
      action: Ern411.Actions.PURGE_RELEASE_MESSAGE,
      element: {
        _attributes: {
          languageAndScriptCode:
            ern.element._attributes.languageAndScriptCode || "en",
        },
        messageHeader: this.convertMessageHeader(ern.element.messageHeader),
      },
    };
  }
}
