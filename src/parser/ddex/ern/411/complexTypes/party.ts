import { Ern411 } from "../../../../../types";
import { parsePartyChoice } from "./partyChoice";

export const parseParty = (object: any): Ern411.Party => ({
  ...parsePartyChoice(object),
  partyReference: object.PartyReference[0],
});
