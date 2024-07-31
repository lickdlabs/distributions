import { Ern382 } from "../../../../../types";

export const parseReason = (object: any): Ern382.Reason => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
