import { Ern382 } from "../../../../../types";

export const parseSubTitle = (object: any): Ern382.SubTitle => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
