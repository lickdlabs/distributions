import { Ern383, Ern411 } from "../../../../../types";

export const convertPartyNameWithoutCode = (
  ern: Ern383.PartyName,
): Ern411.PartyNameWithoutCode => ({
  fullName: ern.fullName.value,
  fullNameAsciiTranscribed: ern.fullNameAsciiTranscribed,
  fullNameIndexed: ern.fullNameIndexed?.value,
  namesBeforeKeyName: ern.namesBeforeKeyName?.value,
  keyName: ern.keyName?.value,
  namesAfterKeyName: ern.namesAfterKeyName?.value,
  abbreviatedName: ern.abbreviatedName?.value,
});
