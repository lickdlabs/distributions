import { Ern383, Ern411 } from "../../../../../types";
import { findPartyReference } from "../utils";
import { convertContributorRole } from "./contributorRole";
import { convertInstrumentType } from "./instrumentType";

export const convertContributor = (
  parties: Ern411.Party[],
  contributor: Ern383.DetailedResourceContributor,
): Ern411.Contributor => ({
  _attributes: contributor._attributes
    ? {
        sequenceNumber: contributor._attributes.sequenceNumber,
      }
    : undefined,
  contributorPartyReference: findPartyReference(parties, contributor),
  role: contributor.resourceContributorRole?.map((role) =>
    convertContributorRole(role),
  ),
  instrumentType: contributor.instrumentType?.map((instrumentType) =>
    convertInstrumentType(instrumentType),
  ),
  hasMadeFeaturedContribution: undefined,
  hasMadeContractedContribution: undefined,
  isCredited: undefined,
  displayCredits: undefined,
});

export const convertContributorFromIndirectResourceContributor = (
  parties: Ern411.Party[],
  contributor: Ern383.IndirectResourceContributor,
): Ern411.Contributor => ({
  _attributes: contributor._attributes
    ? {
        sequenceNumber: contributor._attributes.sequenceNumber,
      }
    : undefined,
  contributorPartyReference: findPartyReference(parties, contributor),
  role: contributor.indirectResourceContributorRole?.map((role) =>
    convertContributorRole(role),
  ),
  instrumentType: undefined,
  hasMadeFeaturedContribution: undefined,
  hasMadeContractedContribution: undefined,
  isCredited: undefined,
  displayCredits: undefined,
});
