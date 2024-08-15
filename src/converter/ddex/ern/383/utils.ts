import { Ern383, Ern411 } from "../../../../types";

export const findArtistPartyReference = (
  parties: Ern411.Party[],
  artist: Ern383.Artist,
): Ern411.Party["partyReference"] => {
  let party: Ern411.Party | undefined;

  if (artist.partyId) {
    party = parties.find(
      (party) => party.partyId?.some((partyId) => partyId === artist.partyId),
    );
  }

  if (!party && artist.partyName) {
    for (const artistPartyName of artist.partyName) {
      party = parties.find(
        (party) =>
          party.partyName?.some(
            (partyName) =>
              partyName.fullName.value === artistPartyName.fullName.value,
          ),
      );

      if (party) {
        break;
      }
    }
  }

  if (!party) {
    throw new Error("could not find artist in parties");
  }

  return party.partyReference;
};

export const findNamePartyReference = (
  parties: Ern411.Party[],
  name: Ern383.Name,
): Ern411.Party["partyReference"] => {
  const party = parties.find(
    (party) =>
      party.partyName?.some(
        (partyName) => partyName.fullName.value === name.value,
      ),
  );

  if (!party) {
    throw new Error("could not find label in parties");
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

export const findContributorReference = (
  parties: Ern411.Party[],
  contributor: Ern383.DetailedResourceContributor,
): Ern411.Party["partyReference"] => {
  let party: Ern411.Party | undefined;

  if (contributor.partyId) {
    party = parties.find(
      (party) =>
        party.partyId?.some((partyId) => partyId === contributor.partyId),
    );
  }

  if (!party && contributor.partyName) {
    for (const artistPartyName of contributor.partyName) {
      party = parties.find(
        (party) =>
          party.partyName?.some(
            (partyName) =>
              partyName.fullName.value === artistPartyName.fullName.value,
          ),
      );

      if (party) {
        break;
      }
    }
  }

  if (!party) {
    throw new Error("could not find artist in parties");
  }

  return party.partyReference;
};
