import { Ern382 } from "../../../../../types";
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
    // @todo <xs:element name="ResourceContributor" minOccurs="0" type="ern:DetailedResourceContributor" />
  };
};
