import { Ern383 } from "../../../../../types";

export const parseComment = (object: any): Ern383.Comment => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
