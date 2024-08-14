import { Ern411 } from "../../../../../types";

export const parseFulfillmentDateWithTerritory = (
  object: any,
): Ern411.FulfillmentDateWithTerritory => ({
  _attributes: object.$
    ? {
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  fulfillmentDate: new Date(object.FulfillmentDate[0]),
  resourceReleaseReference: object.ResourceReleaseReference
    ? object.ResourceReleaseReference[0]
    : undefined,
});
