import { Ern411 } from "../../../../../types";

export const normaliseDetailedPartyId = (partyId: Ern411.DetailedPartyId) => {
  const dpid = partyId.proprietaryId?.find((proprietaryId) =>
    proprietaryId._attributes.namespace.startsWith("DPID:"),
  );

  if (dpid && !partyId.dpid) {
    partyId.dpid = dpid.value as Ern411.DetailedPartyId["dpid"];
  }
};
