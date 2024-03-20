import { Ern411 } from "../../../../../types";

export const parsePartyNameWithoutCode = (
  object: any,
): Ern411.PartyNameWithoutCode => {
  return {
    fullName: object.FullName[0],
    fullNameAsciiTranscribed: object.FullNameAsciiTranscribed
      ? object.FullNameAsciiTranscribed[0]
      : undefined,
    fullNameIndexed: object.FullNameIndexed
      ? object.FullNameIndexed[0]
      : undefined,
    namesBeforeKeyName: object.NamesBeforeKeyName
      ? object.NamesBeforeKeyName[0]
      : undefined,
    keyName: object.KeyName ? object.KeyName[0] : undefined,
    namesAfterKeyName: object.NamesAfterKeyName
      ? object.NamesAfterKeyName[0]
      : undefined,
    abbreviatedName: object.AbbreviatedName
      ? object.AbbreviatedName[0]
      : undefined,
  };
};
