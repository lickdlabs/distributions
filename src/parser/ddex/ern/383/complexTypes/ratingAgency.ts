import { Ern383 } from "../../../../../types";

export const parseRatingAgency = (object: any): Ern383.RatingAgency => {
  const attributes = {
    namespace: object.$?.Namespace || undefined,
    userDefinedValue: object.$?.UserDefinedValue || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
