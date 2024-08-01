import { Ern383 } from "../../../../../types";
import { parseMusicalWorkContributorRole } from "./musicalWorkContributorRole";
import { parsePartyChoice } from "./partyChoice";

export const parseIndirectResourceContributor = (
  object: any,
): Ern383.IndirectResourceContributor => ({
  _attributes: object.$
    ? {
        sequenceNumber: object.$.SequenceNumber
          ? parseInt(object.$.SequenceNumber)
          : undefined,
      }
    : undefined,
  ...parsePartyChoice(object),
  indirectResourceContributorRole: object.IndirectResourceContributorRole
    ? object.IndirectResourceContributorRole.map(
        (indirectResourceContributorRole: any) =>
          parseMusicalWorkContributorRole(indirectResourceContributorRole),
      )
    : undefined,
  nationality: object.Nationality
    ? object.Nationality.map((nationality: string) => nationality)
    : undefined,
});
