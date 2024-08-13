import { Ern383, Ern411 } from "../../../../../types";
import { findReleaseLabelReference } from "../utils";

export const convertReleaseLabelReference = (
  parties: Ern411.Party[],
  labelName: Ern383.LabelName,
): Ern411.ReleaseLabelReference => ({
  _attributes: undefined,
  value: findReleaseLabelReference(parties, labelName),
});
