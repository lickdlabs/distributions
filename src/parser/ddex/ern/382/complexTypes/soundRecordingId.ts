import { Ern382 } from "../../../../../types";
import { parseCatalogNumber } from "./catalogNumber";
import { parseProprietaryId } from "./proprietaryId";

export const parseSoundRecordingId = (object: any): Ern382.SoundRecordingId => {
  const attributes = {
    isReplaced: object.$?.IsReplaced
      ? object.$.IsReplaced === "true"
      : undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    isrc: object.ISRC ? object.ISRC[0] : undefined,
    catalogNumber: object.CatalogNumber
      ? parseCatalogNumber(object.CatalogNumber[0])
      : undefined,
    proprietaryId: object.ProprietaryId
      ? object.ProprietaryId.map((proprietaryId: any) =>
          parseProprietaryId(proprietaryId),
        )
      : undefined,
  };
};
