import { Ern383 } from "../../../../../types";
import { parsePartyChoice } from "./partyChoice";

export const parseAdministratingRecordCompany = (
  object: any,
): Ern383.AdministratingRecordCompany => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
        role: object.$.Role || undefined,
      }
    : undefined,
  ...parsePartyChoice(object),
});
