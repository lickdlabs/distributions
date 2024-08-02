import { Ern411 } from "../../../../../types";

export const parseReleaseRelationshipType = (
  object: any,
): Ern411.ReleaseRelationshipType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
      }
    : undefined,
  value: object._ || object,
});