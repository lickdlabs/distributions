import { Ern383 } from "../../../../../types";
import { parseDescription } from "./description";
import { parseRatingAgency } from "./ratingAgency";

export const parseAvRating = (object: any): Ern383.AvRating => ({
  ratingText: object.RatingText[0],
  ratingAgency: parseRatingAgency(object.RatingAgency[0]),
  ratingSchemeDescription: object.RatingSchemeDescription
    ? object.RatingSchemeDescription.map((ratingSchemeDescription: any) =>
        parseDescription(ratingSchemeDescription),
      )
    : undefined,
});
