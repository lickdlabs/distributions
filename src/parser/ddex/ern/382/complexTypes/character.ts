import { Ern382 } from "../../../../../types";
import { parseDetailedResourceContributor } from "./detailedResourceContributor";
import { parsePartyChoice } from "./partyChoice";

export const parseCharacter = (object: any): Ern382.Character => {
  const attributes = {
    sequenceNumber: object.$?.SequenceNumber
      ? parseInt(object.$.SequenceNumber)
      : undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    ...parsePartyChoice(object),
    resourceContributor: object.DetailedResourceContributor
      ? parseDetailedResourceContributor(object.DetailedResourceContributor[0])
      : undefined,
  };
};
