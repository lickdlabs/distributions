import { Ern411 } from "../../../../../types";
import { parseRatingAgency } from "./ratingAgency";

export const parseAvRating = (object: any): Ern411.AvRating => ({
  _attributes: object.$
    ? {
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  rating: object.Rating[0],
  agency: parseRatingAgency(object.Agency[0]),
  reason: object.Reason ? object.Reason[0] : undefined,
});
