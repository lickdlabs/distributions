import { Ern382 } from "../../../../../types";

export const parseParentalWarningType = (
  object: any,
): Ern382.ParentalWarningType => {
  const attributes = {
    namespace: object.$?.Namespace || undefined,
    userDefinedValue: object.$?.UserDefinedValue || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
