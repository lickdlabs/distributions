import { Ern383, Ern411 } from "../../../../../types";

export const convertGenreWithTerritory = (
  genre: Ern383.Genre,
): Ern411.GenreWithTerritory => ({
  _attributes: genre._attributes
    ? {
        languageAndScriptCode: genre._attributes.languageAndScriptCode,
        applicableTerritoryCode: undefined,
        isDefault: undefined,
      }
    : undefined,
  genreText: genre.genreText.value,
  subGenre: genre.subGenre ? genre.subGenre.value : undefined,
});
