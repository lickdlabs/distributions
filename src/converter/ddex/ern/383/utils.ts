import { Ern383, Ern411 } from "../../../../types";

export const findArtistPartyReference = (
  parties: Ern411.Party[],
  artist: Ern383.Artist,
): Ern411.Party["partyReference"] => {
  const party = parties.find(
    (party) =>
      party.partyId === artist.partyId || party.partyName === artist.partyName,
  );

  if (!party) {
    throw new Error("could not find artist in parties");
  }

  return party.partyReference;
};

export const findReleaseLabelReference = (
  parties: Ern411.Party[],
  labelName: Ern383.LabelName,
): Ern411.Party["partyReference"] => {
  const party = parties.find(
    (party) =>
      party.partyName?.some(
        (partyName) => partyName.fullName.value === labelName.value,
      ),
  );

  if (!party) {
    throw new Error("could not find label in parties");
  }

  return party.partyReference;
};
