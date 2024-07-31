import { Ern382 } from "../../../../../types";
import { parsePartyChoice } from "./partyChoice";

export const parsePartyDescriptor = (object: any): Ern382.PartyDescriptor =>
  parsePartyChoice(object);
