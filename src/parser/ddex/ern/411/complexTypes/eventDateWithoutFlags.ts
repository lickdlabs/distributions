import { Ern411 } from "../../../../../types";

export const parseEventDateWithoutFlags = (
  object: any,
): Ern411.EventDateWithoutFlags => ({
  _attributes: object.$
    ? {
        isApproximate: object.$.IsApproximate
          ? object.$.IsApproximate === "true"
          : undefined,
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        locationDescription: object.$.LocationDescription || undefined,
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  value: new Date(object._ || object),
});
