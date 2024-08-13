import { Ern383, Ern411 } from "../../../../../types";

export const convertProprietaryId = (
  proprietaryId: Ern383.ProprietaryId,
): Ern411.ProprietaryId => ({
  _attributes: {
    namespace: proprietaryId._attributes.namespace,
  },
  value: proprietaryId.value,
});
