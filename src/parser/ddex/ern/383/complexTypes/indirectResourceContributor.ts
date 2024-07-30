import { Ern383 } from "../../../../../types";
import { parseMusicalWorkContributorRole } from "./musicalWorkContributorRole";
import { parsePartyChoice } from "./partyChoice";

export const parseIndirectResourceContributor = (
  object: any,
): Ern383.IndirectResourceContributor => {
  const attributes = {
    sequenceNumber: object.$.SequenceNumber
      ? parseInt(object.$.SequenceNumber)
      : undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
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
  };
};
