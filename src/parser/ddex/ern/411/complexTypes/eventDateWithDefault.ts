import { Ern411 } from "../../../../../types";

export const parseEventDateWithDefault = (
  object: any,
): Ern411.EventDateWithDefault => ({
  _attributes: object.$
    ? {
        isApproximate: object.$.IsApproximate
          ? object.$.IsApproximate === "true"
          : undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  value: new Date(object._ || object),
});
