import { Ern382 } from "../../../../../types";
import { parsePartyChoice } from "./partyChoice";

export const parseArtist = (object: any): Ern382.Artist => {
  const attributes = {
    sequenceNumber: object.$.SequenceNumber
      ? parseInt(object.$.SequenceNumber)
      : undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    ...parsePartyChoice(object),
  };
};
