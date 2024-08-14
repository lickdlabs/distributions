import { Ern411 } from "../../../../../types";

export const parseUseType = (object: any): Ern411.UseType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
