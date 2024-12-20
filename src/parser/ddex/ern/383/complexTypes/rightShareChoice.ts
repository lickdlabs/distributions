import { Ern383 } from "../../../../../types";
import { parseBoolean } from "../../utils";

export const parseRightShareChoice = (
  object: any,
): Partial<Ern383.RightShareChoice> => {
  if (object.RightShareUnknown) {
    return {
      rightShareUnknown: parseBoolean(object.RightShareUnknown[0]),
    };
  }

  if (object.RightSharePercentage) {
    return {
      rightSharePercentage: parseFloat(object.RightSharePercentage[0]),
    };
  }

  return {};
};
