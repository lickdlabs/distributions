import { Ern382 } from "../../../../../types";

export const parseLinkedReleaseResourceReference = (
  object: any,
): Ern382.LinkedReleaseResourceReference => ({
  _attributes: object.$
    ? {
        linkDescription: object.$.LinkDescription || undefined,
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object._ || object,
});
