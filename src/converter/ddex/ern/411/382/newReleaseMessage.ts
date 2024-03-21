import { Ern382, Ern411 } from "../../../../../types";
import { AbstractConverter } from "./abstract";

export class NewReleaseMessageConverter extends AbstractConverter {
  public convert(
    ern: Ern382.Ern<Ern382.Actions.NEW_RELEASE_MESSAGE>,
  ): Ern411.Ern<Ern411.Actions.NEW_RELEASE_MESSAGE> {
    return {
      version: 411,
      action: Ern411.Actions.NEW_RELEASE_MESSAGE,
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
