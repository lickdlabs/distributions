import { Ern382 } from "../../../../../types";

export const parseTitleText = (object: any): Ern382.TitleText => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
