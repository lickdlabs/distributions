import { Ern411 } from "../../../../../types";

export const parseSimpleRightsType = (
  object: any,
): Ern411.SimpleRightsType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
