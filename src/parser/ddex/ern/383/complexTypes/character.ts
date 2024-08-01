import { Ern383 } from "../../../../../types";
import { parseDetailedResourceContributor } from "./detailedResourceContributor";
import { parsePartyChoice } from "./partyChoice";

export const parseCharacter = (object: any): Ern383.Character => ({
  _attributes: object.$
    ? {
        sequenceNumber: object.$.SequenceNumber
          ? parseInt(object.$.SequenceNumber)
          : undefined,
      }
    : undefined,
  ...parsePartyChoice(object),
  resourceContributor: object.DetailedResourceContributor
    ? parseDetailedResourceContributor(object.DetailedResourceContributor[0])
    : undefined,
});
