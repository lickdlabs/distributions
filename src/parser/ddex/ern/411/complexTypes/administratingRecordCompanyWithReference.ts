import { Ern411 } from "../../../../../types";
import { parseAdministratingRecordCompanyRole } from "./administratingRecordCompanyRole";

export const parseAdministratingRecordCompanyWithReference = (
  object: any,
): Ern411.AdministratingRecordCompanyWithReference => ({
  recordCompanyPartyReference: object.RecordCompanyPartyReference[0],
  role: parseAdministratingRecordCompanyRole(object.Role[0]),
});
