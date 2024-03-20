import { Ern382 } from "../../../../../types";

export const parseComment = (object: any): Ern382.Comment => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
