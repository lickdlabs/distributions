import { Ern411 } from "../../../../../types";

export const parsePartyRelationshipType = (
  object: any,
): Ern411.PartyRelationshipType => ({
  _attributes: object.$
    ? {
        namespace: object.$.Namespace || undefined,
        userDefinedValue: object.$.UserDefinedValue || undefined,
        mayBeShared: object.$.MayBeShared
          ? object.$.MayBeShared === "true"
          : undefined,
      }
    : undefined,
  value: object._ || object,
});
