import { Ern411 } from "../../../../../types";
import { parsePartyRelationshipType } from "./partyRelationshipType";

export const parseRelatedParty = (object: any): Ern411.RelatedParty => ({
  partyRelatedPartyReference: object.PartyRelatedPartyReference[0],
  partyRelationshipType: parsePartyRelationshipType(
    object.PartyRelationshipType[0],
  ),
});
