import { Ern383, Ern411 } from "../../../../../types";
import { convertProprietaryId } from "./proprietaryId";

export const convertDetailedPartyId = (
  partyId: Ern383.PartyId,
): Ern411.DetailedPartyId => ({
  isni: partyId._attributes?.isIsni ? partyId.value : undefined,
  dpid:
    partyId._attributes?.isDpid ||
    partyId.value.match(new RegExp("PADPIDA[a-zA-Z0-9]+"))
      ? (partyId.value as Ern411.DetailedPartyId["dpid"])
      : undefined,
  ipiNameNumber: undefined,
  ipn: undefined,
  cisacSocietyId: undefined,
  proprietaryId: [
    convertProprietaryId({
      _attributes: {
        namespace: partyId._attributes?.namespace || partyId.value,
      },
      value: partyId.value,
    }),
  ],
});
