import { Ern383 } from "../../../../../types";
import { parsePartyChoice } from "./partyChoice";

export const parsePartyDescriptor = (object: any): Ern383.PartyDescriptor =>
  parsePartyChoice(object);
