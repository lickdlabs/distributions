import { Ern383, Ern411, ErnVersions } from "../../../../../types";
import { convertMessageHeader } from "../complexType";

export const convertPurgeReleaseMessage = (
  ern: Ern383.ErnPurgeReleaseMessage,
): Ern411.ErnPurgeReleaseMessage => ({
  type: "ddex",
  version: ErnVersions.ERN_411,
  action: Ern411.Actions.PURGE_RELEASE_MESSAGE,
  element: {
    _attributes: {
      languageAndScriptCode:
        ern.element._attributes.languageAndScriptCode || "en",
    },
    messageHeader: convertMessageHeader(ern.element.messageHeader),
  },
});
