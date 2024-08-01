import { Ern411 } from "../../../../../types";
import { parseName } from "./name";

export const parsePartyNameWithTerritory = (
  object: any,
): Ern411.PartyNameWithTerritory => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
        isNickname: object.$.IsNickname
          ? object.$.IsNickname === "true"
          : undefined,
        isStageName: object.$.IsStageName
          ? object.$.IsStageName === "true"
          : undefined,
        isLegalName: object.$.IsLegalName
          ? object.$.IsLegalName === "true"
          : undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
      }
    : undefined,
  fullName: parseName(object.FullName[0]),
  fullNameAsciiTranscribed: object.FullNameAsciiTranscribed
    ? object.FullNameAsciiTranscribed[0]
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
});
