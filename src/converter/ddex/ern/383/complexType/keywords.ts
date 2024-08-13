import { Ern383, Ern411 } from "../../../../../types";

export const convertKeywords = (
  keywords: Ern383.Keywords,
): Ern411.KeywordsWithTerritory => ({
  _attributes: keywords._attributes
    ? {
        languageAndScriptCode: keywords._attributes.languageAndScriptCode,
      }
    : undefined,
  value: keywords.value,
});
