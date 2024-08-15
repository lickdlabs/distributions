import { Ern383, Ern411 } from "../../../../../types";

export const convertCourtesyLineWithDefault = (
  courtesyLine: Ern383.CourtesyLine,
): Ern411.CourtesyLineWithDefault => ({
  _attributes: courtesyLine._attributes
    ? {
        languageAndScriptCode: courtesyLine._attributes.languageAndScriptCode,
        applicableTerritoryCode: undefined,
        isDefault: undefined,
      }
    : undefined,
  value: courtesyLine.value,
});
