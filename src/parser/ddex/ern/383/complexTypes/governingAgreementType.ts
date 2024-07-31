import { Ern383 } from "../../../../../types";

export const parseGoverningAgreementType = (
  object: any,
): Ern383.GoverningAgreementType => {
  const attributes = {
    namespace: object.$?.Namespace || undefined,
    userDefinedValue: object.$?.UserDefinedValue || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
