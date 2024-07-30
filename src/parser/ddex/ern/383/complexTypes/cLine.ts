import { Ern383 } from "../../../../../types";

export const parseCLine = (object: any): Ern383.CLine => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    year: object.Year ? object.Year[0] : undefined,
    cLineCompany: object.CLineCompany ? object.CLineCompany : undefined,
    cLineText: object.CLineText[0],
  };
};
