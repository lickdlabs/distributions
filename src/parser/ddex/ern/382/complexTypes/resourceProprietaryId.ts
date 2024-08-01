import { Ern382 } from "../../../../../types";
import { parseProprietaryId } from "./proprietaryId";

export const parseResourceProprietaryId = (
  object: any,
): Ern382.ResourceProprietaryId => ({
  _attributes: object.$
    ? {
        isReplaced: object.$.IsReplaced
          ? object.$.IsReplaced === "true"
          : undefined,
      }
    : undefined,
  proprietaryId: object.ProprietaryId.map((proprietaryId: any) =>
    parseProprietaryId(proprietaryId),
  ),
});
