import { Ern411 } from "../../../../../types";

export const parsePLineWithDefault = (
  object: any,
): Ern411.PLineWithDefault => ({
  _attributes: object.$
    ? {
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  year: object.Year ? object.Year[0] : undefined,
  pLineCompany: object.PLineCompany ? object.PLineCompany[0] : undefined,
  pLineText: object.PLineText[0],
});
