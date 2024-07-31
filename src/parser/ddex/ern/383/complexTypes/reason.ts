import { Ern383 } from "../../../../../types";

export const parseReason = (object: any): Ern383.Reason => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
