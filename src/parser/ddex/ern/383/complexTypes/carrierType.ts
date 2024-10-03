import { Ern383 } from "../../../../../types";

export const parseCarrierType = (object: any): Ern383.CarrierType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
