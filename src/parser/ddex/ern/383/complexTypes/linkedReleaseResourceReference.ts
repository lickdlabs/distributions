import { Ern383 } from "../../../../../types";

export const parseLinkedReleaseResourceReference = (
  object: any,
): Ern383.LinkedReleaseResourceReference => ({
  _attributes: object.$
    ? {
        linkDescription: object.$.LinkDescription || undefined,
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
