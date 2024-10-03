import { Ern383 } from "../../../../../types";

export const parseReasonType = (object: any): Ern383.ReasonType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
