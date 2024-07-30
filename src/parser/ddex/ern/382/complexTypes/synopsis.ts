import { Ern382 } from "../../../../../types";

export const parseSynopsis = (object: any): Ern382.Synopsis => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
