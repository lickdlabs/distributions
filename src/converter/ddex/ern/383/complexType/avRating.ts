import { Ern383, Ern411 } from "../../../../../types";
import { convertRatingAgency } from "./ratingAgency";

export const convertAvRating = (
  avRating: Ern383.AvRating,
): Ern411.AvRating => ({
  _attributes: undefined,
  rating: avRating.ratingText,
  agency: convertRatingAgency(avRating.ratingAgency),
  reason: undefined,
});
