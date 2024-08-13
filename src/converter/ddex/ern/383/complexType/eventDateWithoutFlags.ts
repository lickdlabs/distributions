import { Ern383, Ern411 } from "../../../../../types";

export const convertEventDateWithoutFlags = (
  eventDate: Ern383.EventDate,
): Ern411.EventDateWithoutFlags => ({
  _attributes: eventDate._attributes
    ? {
        isApproximate: eventDate._attributes.isApproximate,
        applicableTerritoryCode: eventDate._attributes.territoryCode,
        locationDescription: eventDate._attributes.locationDescription,
        languageAndScriptCode: eventDate._attributes.languageAndScriptCode,
      }
    : undefined,
  value: eventDate.value,
});
