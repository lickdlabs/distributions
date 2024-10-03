import { Ern383 } from "../../../../../types";

export const parseRatingAgency = (object: any): Ern383.RatingAgency => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
