import { Ern411 } from "../../../../../types";
import { parseProprietaryId } from "./proprietaryId";

export const parseResourceProprietaryId = (
  object: any,
): Ern411.ResourceProprietaryId => ({
  _attributes: object.$
    ? {
        isReplaced: object.IsReplaced
          ? object.IsReplaced[0] === "true"
          : undefined,
      }
    : undefined,
  proprietaryId: object.ProprietaryId.map((proprietaryId: any) =>
    parseProprietaryId(proprietaryId),
  ),
});
