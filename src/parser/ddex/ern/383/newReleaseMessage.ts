import { Ern383 } from "../../../../types";
import { AbstractParser } from "./abstract";

export class NewReleaseMessageParser extends AbstractParser {
  public parse(object: any): Ern383.Ern<Ern383.Actions.NEW_RELEASE_MESSAGE> {
    return {
      version: 383,
      action: Ern383.Actions.NEW_RELEASE_MESSAGE,
      element: {
        _attributes: {
          messageSchemaVersionId: object.$.MessageSchemaVersionId,
          businessProfileVersionId:
            object.$.BusinessProfileVersionId || undefined,
          releaseProfileVersionId:
            object.$.ReleaseProfileVersionId || undefined,
          languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        },
        messageHeader: this.parseMessageHeader(object.MessageHeader[0]),
        updateIndicator: object.UpdateIndicator
          ? object.UpdateIndicator[0]
          : undefined,
        isBackfill: object.IsBackfill
          ? object.IsBackfill[0] === "true"
          : undefined,
        resourceList: this.parseResourceList(object.ResourceList[0]),
      },
    };
  }
}
