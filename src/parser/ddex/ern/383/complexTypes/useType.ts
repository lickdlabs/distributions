import { Ern383 } from "../../../../../types";

export const parseUseType = (object: any): Ern383.UseType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
