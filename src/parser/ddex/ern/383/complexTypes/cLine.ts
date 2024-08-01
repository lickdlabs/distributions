import { Ern383 } from "../../../../../types";

export const parseCLine = (object: any): Ern383.CLine => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  year: object.Year ? object.Year[0] : undefined,
  cLineCompany: object.CLineCompany ? object.CLineCompany : undefined,
  cLineText: object.CLineText[0],
});
