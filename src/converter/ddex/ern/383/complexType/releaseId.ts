import { Ern383, Ern411 } from "../../../../../types";
import { convertProprietaryId } from "./proprietaryId";

export const convertReleaseId = (ern: Ern383.ReleaseId): Ern411.ReleaseId => ({
  grid: ern.grid,
  isrc: ern.isrc,
  icpn: ern.icpn?.value,
  catalogNumber: ern.catalogNumber,
  proprietaryId: ern.proprietaryId
    ? ern.proprietaryId.map((proprietaryId) =>
        convertProprietaryId(proprietaryId),
      )
    : undefined,
});
