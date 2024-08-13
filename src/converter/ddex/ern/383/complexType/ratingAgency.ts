import { Ern383, Ern411 } from "../../../../../types";

export const convertRatingAgency = (
  ratingAgency: Ern383.RatingAgency,
): Ern411.RatingAgency => ({
  _attributes: ratingAgency._attributes
    ? {
        namespace: ratingAgency._attributes.namespace,
        userDefinedValue: ratingAgency._attributes.userDefinedValue,
      }
    : undefined,
  value: ratingAgency.value,
});
