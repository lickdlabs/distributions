import { Ern383, Ern411 } from "../../../../../types";

export const convertCLineWithDefault = (
  cLine: Ern383.CLine,
): Ern411.CLineWithDefault => ({
  _attributes: cLine._attributes
    ? {
        applicableTerritoryCode: undefined,
        isDefault: undefined,
        languageAndScriptCode: cLine._attributes.languageAndScriptCode,
      }
    : undefined,
  year: cLine.year,
  cLineCompany: cLine.cLineCompany,
  cLineText: cLine.cLineText,
});
