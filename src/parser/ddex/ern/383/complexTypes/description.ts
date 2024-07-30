import { Ern383 } from "../../../../../types";

export const parseDescription = (object: any): Ern383.Description => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
