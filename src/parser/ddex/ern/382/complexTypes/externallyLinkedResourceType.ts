import { Ern382 } from "../../../../../types";

export const parseExternallyLinkedResourceType = (
  object: any,
): Ern382.ExternallyLinkedResourceType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
