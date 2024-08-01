import { Ern411 } from "../../../../../types";

export const parseTextType = (object: any): Ern411.TextType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
