import { Ern383, Ern411 } from "../../../../../types";

export const convertPLineWithDefault = (
  pLine: Ern383.PLine,
): Ern411.PLineWithDefault => ({
  _attributes: pLine._attributes
    ? {
        applicableTerritoryCode: undefined,
        isDefault: undefined,
        languageAndScriptCode: pLine._attributes.languageAndScriptCode,
      }
    : undefined,
  year: pLine.year,
  pLineCompany: pLine.pLineCompany,
  pLineText: pLine.pLineText,
});
