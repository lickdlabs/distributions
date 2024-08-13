import { Ern383, Ern411 } from "../../../../../types";

export const convertPartyNameWithoutCode = (
  partyName: Ern383.PartyName,
): Ern411.PartyNameWithoutCode => ({
  fullName: partyName.fullName.value,
  fullNameAsciiTranscribed: partyName.fullNameAsciiTranscribed,
  fullNameIndexed: partyName.fullNameIndexed?.value,
  namesBeforeKeyName: partyName.namesBeforeKeyName?.value,
  keyName: partyName.keyName?.value,
  namesAfterKeyName: partyName.namesAfterKeyName?.value,
  abbreviatedName: partyName.abbreviatedName?.value,
});
