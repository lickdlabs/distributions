import { Ern383 } from "../../../../../types";

export const parseLinkedReleaseResourceReference = (
  object: any,
): Ern383.LinkedReleaseResourceReference => {
  const attributes = {
    linkDescription: object.$?.LinkDescription || undefined,
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
