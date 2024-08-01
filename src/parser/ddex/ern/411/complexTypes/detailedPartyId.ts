import { Ern411 } from "../../../../../types";
import { parseProprietaryId } from "./proprietaryId";

export const parseDetailedPartyId = (object: any): Ern411.DetailedPartyId => ({
  isni: object.ISNI ? object.ISNI[0] : undefined,
  dpid: object.DPID ? object.DPID[0] : undefined,
  ipiNameNumber: object.IpiNameNumber ? object.IpiNameNumber[0] : undefined,
  ipn: object.IPN ? object.IPN[0] : undefined,
  cisacSocietyId: object.CisacSocietyId ? object.CisacSocietyId[0] : undefined,
  proprietaryId: object.ProprietaryId
    ? object.ProprietaryId.map((proprietaryId: any) =>
        parseProprietaryId(proprietaryId),
      )
    : undefined,
});
