import { Ern383 } from "../../../../../types";

export const parseSynopsis = (object: any): Ern383.Synopsis => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
