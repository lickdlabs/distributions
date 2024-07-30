import { Ern383 } from "../../../../../types";

export const parseTitleText = (object: any): Ern383.TitleText => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
