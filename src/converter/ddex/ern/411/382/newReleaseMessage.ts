import { Ern382, Ern411 } from "../../../../../types";
import { AbstractConverter } from "./abstract";

export class NewReleaseMessageConverter extends AbstractConverter {
  public convert(
    ern: Ern382.ErnNewReleaseMessage,
  ): Ern411.ErnNewReleaseMessage {
    return {
      type: "ddex",
      version: 411,
      action: "NewReleaseMessage",
      element: {
        _attributes: {
          languageAndScriptCode:
            ern.element._attributes.languageAndScriptCode || "en",
        },
        messageHeader: this.convertMessageHeader(ern.element.messageHeader),
        resourceList: this.convertResourceList(ern.element.resourceList),
      },
    };
  }
}
