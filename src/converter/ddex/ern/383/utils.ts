import { Ern383, Ern411 } from "../../../../types";

export const findPartyReference = (
  parties: Ern411.Party[],
  party: Partial<Ern383.PartyChoice>,
): Ern411.Party["partyReference"] => {
  let reference: Ern411.Party | undefined;

  if (party.partyId) {
    reference = parties.find(
      (party) => party.partyId?.some((partyId) => partyId === party.partyId),
    );
  }

  if (!reference && party.partyName) {
    for (const artistPartyName of party.partyName) {
      reference = parties.find(
        (party) =>
          party.partyName?.some(
            (partyName) =>
              partyName.fullName.value === artistPartyName.fullName.value,
          ),
      );

      if (reference) {
        break;
      }
    }
  }

  if (!reference) {
    throw new Error("could not find artist in parties");
  }

  return reference.partyReference;
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
