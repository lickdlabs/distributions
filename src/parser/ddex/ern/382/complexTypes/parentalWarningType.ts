import { Ern382 } from "../../../../../types";

export const parseParentalWarningType = (
  object: any,
): Ern382.ParentalWarningType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
