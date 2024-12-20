import { Ern411 } from "../../../../../types";
import { normaliseDetailedPartyId } from "./detailedPartyId";

export const normaliseParty = (party: Ern411.Party): void => {
  party.partyId?.map((partyId) => normaliseDetailedPartyId(partyId));
};
