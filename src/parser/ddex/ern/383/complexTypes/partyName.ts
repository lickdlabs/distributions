import { Ern383 } from "../../../../../types";
import { parseName } from "./name";

export const parsePartyName = (object: any): Ern383.PartyName => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    fullName: parseName(object.FullName[0]),
    fullNameAsciiTranscribed: object.fullNameAsciiTranscribed
      ? object.fullNameAsciiTranscribed[0]
      : undefined,
    fullNameIndexed: object.FullNameIndexed
      ? parseName(object.FullNameIndexed[0])
      : undefined,
    namesBeforeKeyName: object.NamesBeforeKeyName
      ? parseName(object.NamesBeforeKeyName[0])
      : undefined,
    keyName: object.KeyName ? parseName(object.KeyName[0]) : undefined,
    namesAfterKeyName: object.NamesAfterKeyName
      ? parseName(object.NamesAfterKeyName[0])
      : undefined,
    abbreviatedName: object.AbbreviatedName
      ? parseName(object.AbbreviatedName[0])
      : undefined,
  };
};
