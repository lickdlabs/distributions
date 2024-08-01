import { Ern382 } from "../../../../../types";

export const parseReasonType = (object: any): Ern382.ReasonType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
