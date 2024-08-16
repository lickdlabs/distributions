import { Ern383, Ern411 } from "../../../../../types";

export const convertEventDate = (
  eventDate: Ern383.EventDate,
): Ern411.EventDate => ({
  _attributes: eventDate._attributes
    ? {
        isApproximate: eventDate._attributes.isApproximate,
        isBefore: eventDate._attributes.isBefore,
        isAfter: eventDate._attributes.isAfter,
        applicableTerritoryCode: eventDate._attributes.territoryCode,
        locationDescription: eventDate._attributes.locationDescription,
        languageAndScriptCode: eventDate._attributes.languageAndScriptCode,
      }
    : undefined,
  value: eventDate.value,
});
