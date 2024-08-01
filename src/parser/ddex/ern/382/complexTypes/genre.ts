import { Ern382 } from "../../../../../types";
import { parseDescription } from "./description";

export const parseGenre = (object: any): Ern382.Genre => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  genreText: parseDescription(object.GenreText[0]),
  subGenre: object.SubGenre ? parseDescription(object.SubGenre[0]) : undefined,
});
