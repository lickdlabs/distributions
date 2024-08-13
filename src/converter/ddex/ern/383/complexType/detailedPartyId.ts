import { Ern383, Ern411 } from "../../../../../types";
import { convertProprietaryId } from "./proprietaryId";

export const convertDetailedPartyId = (
  partyId: Ern383.PartyId,
): Ern411.DetailedPartyId => ({
  isni: partyId._attributes?.isIsni ? partyId.value : undefined,
  dpid: partyId._attributes?.isDpid
    ? (partyId.value as Ern411.DetailedPartyId["dpid"])
    : undefined,
  ipiNameNumber: undefined,
  ipn: undefined,
  cisacSocietyId: undefined,
  proprietaryId: partyId._attributes?.namespace
    ? [
        convertProprietaryId({
          _attributes: {
            namespace: partyId._attributes.namespace,
          },
          value: partyId.value,
        }),
      ]
    : undefined,
});
