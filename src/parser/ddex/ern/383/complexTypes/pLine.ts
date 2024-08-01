import { Ern383 } from "../../../../../types";

export const parsePLine = (object: any): Ern383.PLine => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        pLineType: object.$.PLineType || undefined,
      }
    : undefined,
  year: object.Year ? object.Year[0] : undefined,
  pLineCompany: object.PLineCompany ? object.PLineCompany : undefined,
  pLineText: object.PLineText[0],
});
