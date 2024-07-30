import { Ern383 } from "../../../../../types";

export const parsePLine = (object: any): Ern383.PLine => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
    pLineType: object.$?.PLineType || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    year: object.Year ? object.Year[0] : undefined,
    pLineCompany: object.PLineCompany ? object.PLineCompany : undefined,
    pLineText: object.PLineText[0],
  };
};
