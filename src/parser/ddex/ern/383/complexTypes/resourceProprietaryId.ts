import { Ern383 } from "../../../../../types";
import { parseProprietaryId } from "./proprietaryId";

export const parseResourceProprietaryId = (
  object: any,
): Ern383.ResourceProprietaryId => {
  const attributes = {
    isReplaced: object.$?.IsReplaced
      ? object.$.IsReplaced === "true"
      : undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    proprietaryId: object.ProprietaryId.map((proprietaryId: any) =>
      parseProprietaryId(proprietaryId),
    ),
  };
};
