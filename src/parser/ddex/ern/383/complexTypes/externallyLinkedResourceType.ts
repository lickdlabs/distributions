import { Ern383 } from "../../../../../types";

export const parseExternallyLinkedResourceType = (
  object: any,
): Ern383.ExternallyLinkedResourceType => {
  const attributes = {
    namespace: object.$?.Namespace || undefined,
    userDefinedValue: object.$?.UserDefinedValue || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
