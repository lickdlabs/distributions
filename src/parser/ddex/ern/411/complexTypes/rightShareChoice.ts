import { Ern411 } from "../../../../../types";

export const parseRightShareChoice = (
  object: any,
): Partial<Ern411.RightShareChoice> => {
  if (object.RightShareUnknown) {
    return {
      rightShareUnknown: object.RightShareUnknown[0] === "true",
    };
  }

  if (object.RightSharePercentage) {
    return {
      rightSharePercentage: parseFloat(object.RightSharePercentage[0]),
    };
  }

  return {};
};
