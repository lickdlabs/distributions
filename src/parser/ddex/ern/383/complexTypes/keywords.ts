import { Ern383 } from "../../../../../types";

export const parseKeywords = (object: any): Ern383.Keywords => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
