import { Ern411 } from "../../../../../types";

export const parseCatalogNumber = (object: any): Ern411.CatalogNumber => ({
  _attributes: {
    namespace: object.$.Namespace,
  },
  value: object._,
});
