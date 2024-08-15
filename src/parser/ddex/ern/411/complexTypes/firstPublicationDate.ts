import { Ern411 } from "../../../../../types";

export const parseFirstPublicationDate = (
  object: any,
): Ern411.FirstPublicationDate => ({
  _attributes: object.$
    ? {
        applicableTerritoryCode: object.$.ApplicableTerritoryCode || undefined,
        isDefault: object.$.IsDefault
          ? object.$.IsDefault === "true"
          : undefined,
      }
    : undefined,
  value: new Date(object._ || object),
});
