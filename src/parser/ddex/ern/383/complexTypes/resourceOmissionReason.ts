import { Ern383 } from "../../../../../types";

export const parseResourceOmissionReason = (
  object: any,
): Ern383.ResourceOmissionReason => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
