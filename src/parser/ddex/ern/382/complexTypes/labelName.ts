import { Ern382 } from "../../../../../types";

export const parseLabelName = (object: any): Ern382.LabelName => ({
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
