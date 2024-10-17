import { Ern411 } from "../../../../../types";
import { normaliseParty } from "./party";

export const normalisePartyList = (partyList: Ern411.PartyList): void => {
  partyList.party.map((party) => normaliseParty(party));
};
