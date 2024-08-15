import { Ern383 } from "../../../../../types";

export const parsePurpose = (object: any): Ern383.Purpose => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
