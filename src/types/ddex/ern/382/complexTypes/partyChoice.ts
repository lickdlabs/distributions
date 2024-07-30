import { PartyId } from "./partyId";
import { PartyName } from "./partyName";

export type PartyChoice =
  | { partyId: PartyId[] }
  | { partyName: PartyName[]; partyId?: PartyId[] };
