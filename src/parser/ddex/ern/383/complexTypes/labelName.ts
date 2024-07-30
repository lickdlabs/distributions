import { Ern383 } from "../../../../../types";

export const parseLabelName = (object: any): Ern383.LabelName => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    labelNameType: object.$?.LabelNameType || undefined,
    namespace: object.$?.Namespace || undefined,
    userDefinedValue: object.$?.UserDefinedValue || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
