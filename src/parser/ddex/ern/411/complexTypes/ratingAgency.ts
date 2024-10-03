import { Ern411 } from "../../../../../types";

export const parseRatingAgency = (object: any): Ern411.RatingAgency => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
