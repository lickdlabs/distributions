import { Ern382 } from "../../../../../types";

export const parseResourceOmissionReason = (
  object: any,
): Ern382.ResourceOmissionReason => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
