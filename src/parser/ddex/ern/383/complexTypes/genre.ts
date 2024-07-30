import { Ern383 } from "../../../../../types";
import { parseDescription } from "./description";

export const parseGenre = (object: any): Ern383.Genre => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    genreText: parseDescription(object.GenreText[0]),
    subGenre: object.SubGenre
      ? parseDescription(object.SubGenre[0])
      : undefined,
  };
};
