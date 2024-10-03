import { Ern382 } from "../../../../../types";

export const parsePurpose = (object: any): Ern382.Purpose => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
