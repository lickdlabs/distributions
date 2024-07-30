import { Ern382 } from "../../../../../types";

export const parseDescription = (object: any): Ern382.Description => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
