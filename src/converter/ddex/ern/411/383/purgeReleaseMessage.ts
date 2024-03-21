import { Ern383, Ern411 } from "../../../../../types";
import { AbstractConverter } from "./abstract";

export class PurgeReleaseMessageConverter extends AbstractConverter {
  public convert(
    ern: Ern383.Ern<Ern383.Actions.PURGE_RELEASE_MESSAGE>,
  ): Ern411.Ern<Ern411.Actions.PURGE_RELEASE_MESSAGE> {
    return {
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
