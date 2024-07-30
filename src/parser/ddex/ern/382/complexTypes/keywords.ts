import { Ern382 } from "../../../../../types";

export const parseKeywords = (object: any): Ern382.Keywords => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
