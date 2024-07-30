import { Ern382 } from "../../../../../types";

export const parseCatalogNumber = (object: any): Ern382.CatalogNumber => ({
  _attributes: {
    namespace: object.$.Namespace,
  },
  value: object._,
});
