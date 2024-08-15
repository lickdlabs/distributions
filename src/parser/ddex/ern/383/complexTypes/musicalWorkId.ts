import { Ern383 } from "../../../../../types";
import { parseProprietaryId } from "./proprietaryId";

export const parseMusicalWorkId = (object: any): Ern383.MusicalWorkId => ({
  _attributes: object.$
    ? {
        isReplaced: object.$.IsReplaced
          ? object.$.IsReplaced === "true"
          : undefined,
      }
    : undefined,
  iswc: object.ISWC ? object.ISWC[0] : undefined,
  opusNumber: object.OpusNumber ? object.OpusNumber[0] : undefined,
  composerCatalogNumber: object.ComposerCatalogNumber
    ? object.ComposerCatalogNumber.map(
        (composerCatalogNumber: string) => composerCatalogNumber,
      )
    : undefined,
  proprietaryId: object.ProprietaryId
    ? object.ProprietaryId.map((proprietaryId: any) =>
        parseProprietaryId(proprietaryId),
      )
    : undefined,
});
