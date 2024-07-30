import { Ern382 } from "../../../../../types";
import { parsePartyChoice } from "./partyChoice";

export const parseAdministratingRecordCompany = (
  object: any,
): Ern382.AdministratingRecordCompany => {
  const attributes = {
    namespace: object.$?.Namespace || undefined,
    userDefinedValue: object.$?.UserDefinedValue || undefined,
    role: object.$?.Role || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    ...parsePartyChoice(object),
  };
};
