import { ConverterError } from "../../../../errors";
import { Ern383, Ern411, ErnVersions } from "../../../../types";

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
    throw new ConverterError({
      version: ErnVersions.ERN_383,
      message: "could not find artist in parties",
    });
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
    throw new ConverterError({
      version: ErnVersions.ERN_383,
      message: "could not find label in parties",
    });
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
    throw new ConverterError({
      version: ErnVersions.ERN_383,
      message: "could not find label in parties",
    });
  }

  return party.partyReference;
};

export const isReleaseResourceReferenceList = (
  object: any,
): object is Ern383.ReleaseResourceReferenceList =>
  (object as Ern383.ReleaseResourceReferenceList).releaseResourceReference !==
  undefined;

export const isReleaseResourceReference = (
  object: any,
): object is Ern383.ReleaseResourceReference =>
  (object as Ern383.ReleaseResourceReference).value !== undefined;
