import { Ern411 } from "../../../../../types";

export const parseReleaseLabelReference = (
  object: any,
): Ern411.ReleaseLabelReference => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        isDefault: object.IsDefault
          ? object.IsDefault[0] === "true"
          : undefined,
        labelType: object.$.LabelType || undefined,
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
