import { Ern411 } from "../../../../../types";

export const parseProprietaryId = (object: any): Ern411.ProprietaryId => ({
  _attributes: {
    namespace: object.$.Namespace,
  },
  value: object._,
});
