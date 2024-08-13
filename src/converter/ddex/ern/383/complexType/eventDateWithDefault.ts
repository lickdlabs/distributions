import { Ern383, Ern411 } from "../../../../../types";

export const convertEventDateWithDefault = (
  eventDate: Ern383.EventDate,
): Ern411.EventDateWithDefault => ({
  _attributes: eventDate._attributes
    ? {
        isApproximate: eventDate._attributes.isApproximate,
        applicableTerritoryCode: eventDate._attributes.territoryCode,
        isDefault: undefined,
      }
    : undefined,
  value: eventDate.value,
});
