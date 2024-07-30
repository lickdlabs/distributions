import { Ern383 } from "../../../../../types";

export const parseCatalogNumber = (object: any): Ern383.CatalogNumber => ({
  _attributes: {
    namespace: object.$.Namespace,
  },
  value: object._,
});
