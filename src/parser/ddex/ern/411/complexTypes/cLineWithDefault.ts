import { Ern411 } from "../../../../../types";

export const parseCLineWithDefault = (
  object: any,
): Ern411.CLineWithDefault => ({
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
  cLineCompany: object.CLineCompany ? object.CLineCompany[0] : undefined,
  cLineText: object.CLineText[0],
});
