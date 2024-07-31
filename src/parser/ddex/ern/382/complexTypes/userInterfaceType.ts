import { Ern382 } from "../../../../../types";

export const parseUserInterfaceType = (
  object: any,
): Ern382.UserInterfaceType => {
  const attributes = {
    namespace: object.$?.Namespace || undefined,
    userDefinedValue: object.$?.UserDefinedValue || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
