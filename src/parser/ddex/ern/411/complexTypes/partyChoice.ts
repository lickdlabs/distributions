import { Ern411 } from "../../../../../types";
import { parseDetailedPartyId } from "./detailedPartyId";
import { parsePartyNameWithTerritory } from "./partyNameWithTerritory";

export const parsePartyChoice = (object: any): Ern411.PartyChoice => {
  if (object.PartyName) {
    return {
      partyName: object.PartyName.map((partyName: any) =>
        parsePartyNameWithTerritory(partyName),
      ),
      partyId: object.PartyId
        ? object.PartyId.map((partyId: any) => parseDetailedPartyId(partyId))
        : undefined,
    };
  }

  return {
    partyId: object.PartyId.map((partyId: any) =>
      parseDetailedPartyId(partyId),
    ),
  };
};
