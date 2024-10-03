import { Ern411 } from "../../../../../types";

export const parseAdministratingRecordCompanyRole = (
  object: any,
): Ern411.AdministratingRecordCompanyRole => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
