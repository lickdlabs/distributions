import { Ern411 } from "../../../../../types";

export const parseCourtesyLineWithDefault = (
  object: any,
): Ern411.CourtesyLineWithDefault => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
