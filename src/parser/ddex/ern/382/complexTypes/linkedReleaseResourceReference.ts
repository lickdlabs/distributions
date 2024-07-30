import { Ern382 } from "../../../../../types";

export const parseLinkedReleaseResourceReference = (
  object: any,
): Ern382.LinkedReleaseResourceReference => {
  const attributes = {
    linkDescription: object.$?.LinkDescription || undefined,
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
