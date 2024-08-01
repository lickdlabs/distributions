import { Ern411 } from "../../../../../types";

export const parseGenreWithTerritory = (
  object: any,
): Ern411.GenreWithTerritory => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  genreText: object.GenreText[0],
  subGenre: object.SubGenre ? object.SubGenre[0] : undefined,
});
