import { Ern383, Ern411 } from "../../../../../types";
import { convertProprietaryId } from "./proprietaryId";

export const convertResourceProprietaryId = (
  resourceProprietaryId: Ern383.ResourceProprietaryId,
): Ern411.ResourceProprietaryId => ({
  _attributes: resourceProprietaryId._attributes
    ? {
        isReplaced: resourceProprietaryId._attributes.isReplaced,
      }
    : undefined,
  proprietaryId: resourceProprietaryId.proprietaryId.map((proprietaryId) =>
    convertProprietaryId(proprietaryId),
  ),
});
