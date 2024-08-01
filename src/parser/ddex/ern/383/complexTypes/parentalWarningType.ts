import { Ern383 } from "../../../../../types";

export const parseParentalWarningType = (
  object: any,
): Ern383.ParentalWarningType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
