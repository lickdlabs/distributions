import { Ern411 } from "../../../../../types";
import { parseCatalogNumber } from "./catalogNumber";
import { parseProprietaryId } from "./proprietaryId";

export const parseSoundRecordingId = (
  object: any,
): Ern411.SoundRecordingId => ({
  _attributes: object.$
    ? {
        isReplaced: object.IsReplaced
          ? object.IsReplaced[0] === "true"
          : undefined,
      }
    : undefined,
  isrc: object.ISRC ? object.ISRC[0] : undefined,
  catalogNumber: object.CatalogNumber
    ? parseCatalogNumber(object.CatalogNumber[0])
    : undefined,
  proprietaryId: object.ProprietaryId
    ? object.ProprietaryId.map((proprietaryId: any) =>
        parseProprietaryId(proprietaryId),
      )
    : undefined,
});