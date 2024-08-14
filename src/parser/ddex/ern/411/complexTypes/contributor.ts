import { Ern411 } from "../../../../../types";
import { parseContributorRole } from "./contributorRole";
import { parseDisplayCredits } from "./displayCredits";
import { parseInstrumentType } from "./instrumentType";
import { parseIsCredited } from "./isCredited";

export const parseContributor = (object: any): Ern411.Contributor => ({
  _attributes: object.$
    ? {
        sequenceNumber: object.$.SequenceNumber
          ? parseInt(object.$.SequenceNumber)
          : undefined,
      }
    : undefined,
  contributorPartyReference: object.ContributorPartyReference[0],
  role: object.Role
    ? object.Role.map((role: any) => parseContributorRole(role))
    : undefined,
  instrumentType: object.InstrumentType
    ? object.InstrumentType.map((instrumentType: any) =>
        parseInstrumentType(instrumentType),
      )
    : undefined,
  hasMadeFeaturedContribution: object.HasMadeFeaturedContribution
    ? object.HasMadeFeaturedContribution[0] === "true"
    : undefined,
  hasMadeContractedContribution: object.HasMadeContractedContribution
    ? object.HasMadeContractedContribution[0] === "true"
    : undefined,
  isCredited: object.IsCredited
    ? parseIsCredited(object.IsCredited[0])
    : undefined,
  displayCredits: object.DisplayCredits
    ? object.DisplayCredits.map((displayCredits: any) =>
        parseDisplayCredits(displayCredits),
      )
    : undefined,
});
