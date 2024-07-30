import { Ern382 } from "../../../../../types";

export const parseProprietaryId = (object: any): Ern382.ProprietaryId => ({
  _attributes: {
    namespace: object.$.Namespace,
  },
  value: object._,
});
