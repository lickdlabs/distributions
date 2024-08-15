import { Ern383, Ern411 } from "../../../../../types";
import { convertProprietaryId } from "./proprietaryId";

export const convertMusicalWorkId = (
  musicalWorkId: Ern383.MusicalWorkId,
): Ern411.MusicalWorkId => ({
  _attributes: musicalWorkId._attributes
    ? {
        isReplaced: musicalWorkId._attributes.isReplaced,
      }
    : undefined,
  iswc: musicalWorkId.iswc,
  opusNumber: musicalWorkId.opusNumber,
  composerCatalogNumber: musicalWorkId.composerCatalogNumber?.map(
    (composerCatalogNumber) => composerCatalogNumber,
  ),
  proprietaryId: musicalWorkId.proprietaryId?.map((proprietaryId) =>
    convertProprietaryId(proprietaryId),
  ),
});
