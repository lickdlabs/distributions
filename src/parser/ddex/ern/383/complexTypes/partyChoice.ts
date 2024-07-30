import { Ern383 } from "../../../../../types";
import { parsePartyId } from "./partyId";
import { parsePartyName } from "./partyName";

export const parsePartyChoice = (object: any): Ern383.PartyChoice => {
  if (object.PartyName) {
    return {
      partyName: object.PartyName.map((partyName: any) =>
        parsePartyName(partyName),
      ),
      partyId: object.PartyId
        ? object.PartyId.map((partyId: any) => parsePartyId(partyId))
        : undefined,
    };
  }

  return {
    partyId: object.PartyId.map((partyId: any) => parsePartyId(partyId)),
  };
};
