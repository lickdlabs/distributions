import { Ern383 } from "../../../../../types";

export const parseProprietaryId = (object: any): Ern383.ProprietaryId => ({
  _attributes: {
    namespace: object.$.Namespace,
  },
  value: object._,
});
