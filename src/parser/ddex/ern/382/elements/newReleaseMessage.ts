import { Ern382 } from "../../../../../types";
import { parseMessageHeader, parseResourceList } from "../complexTypes";
import { parseReleaseList } from "../complexTypes/releaseList";

export const parseNewReleaseMessage = (
  object: any,
): Ern382.ErnNewReleaseMessage => ({
  type: "ddex",
  version: 382,
  action: Ern382.Actions.NEW_RELEASE_MESSAGE,
  element: {
    _attributes: {
      messageSchemaVersionId: object.$.MessageSchemaVersionId,
      businessProfileVersionId: object.$.BusinessProfileVersionId || undefined,
      releaseProfileVersionId: object.$.ReleaseProfileVersionId || undefined,
      languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
    },
    messageHeader: parseMessageHeader(object.MessageHeader[0]),
    updateIndicator: object.UpdateIndicator
      ? object.UpdateIndicator[0]
      : undefined,
    isBackfill: object.IsBackfill ? object.IsBackfill[0] === "true" : undefined,
    resourceList: parseResourceList(object.ResourceList[0]),
    releaseList: parseReleaseList(object.ReleaseList[0]),
  },
});
