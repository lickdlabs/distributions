import { Ern382 } from "../../../../../types";
import { parseDescription } from "./description";

export const parseGenre = (object: any): Ern382.Genre => {
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
