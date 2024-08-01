import { Ern411 } from "../../../../../types";
import { parseParty } from "./party";

export const parsePartyList = (object: any): Ern411.PartyList => ({
  party: object.Party.map((party: any) => parseParty(party)),
});
