import { Ern383 } from "../../../../../types";

export const parseExternallyLinkedResourceType = (
  object: any,
): Ern383.ExternallyLinkedResourceType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});
