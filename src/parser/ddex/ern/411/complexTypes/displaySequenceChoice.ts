import { Ern411 } from "../../../../../types";

export const parseDisplaySequenceChoice = (
  object: any,
): Partial<Ern411.DisplaySequenceChoice> => {
  if (object.NoDisplaySequence) {
    return {
      noDisplaySequence: object.NoDisplaySequence[0] === "true",
    };
  }

  if (object.DisplaySequence) {
    return {
      displaySequence: object.DisplaySequence[0],
    };
  }

  return {};
};
