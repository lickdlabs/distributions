import { Ern411 } from "../../../../../types";

export const parseInstrumentType = (object: any): Ern411.InstrumentType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
