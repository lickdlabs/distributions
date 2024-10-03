import { Ern383 } from "../../../../../types";

export const parseLabelName = (object: any): Ern383.LabelName => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        labelNameType: object.$.LabelNameType || undefined,
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
