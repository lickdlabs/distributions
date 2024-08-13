import { Ern383, Ern411 } from "../../../../../types";

export const convertExternallyLinkedResourceType = (
  externallyLinkedResourceType: Ern383.ExternallyLinkedResourceType,
): Ern411.ExternallyLinkedResourceType => ({
  _attributes: externallyLinkedResourceType._attributes
    ? {
        namespace: externallyLinkedResourceType._attributes.namespace,
        userDefinedValue:
          externallyLinkedResourceType._attributes.userDefinedValue,
      }
    : undefined,
  value: externallyLinkedResourceType.value,
});
