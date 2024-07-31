import { Ern382, Ern383 } from "../../../../../types";
import { convertReleaseDetailsByTerritory } from "./releaseDetailsByTerritory";

export const convertRelease = (ern: Ern382.Release): Ern383.Release => ({
  ...ern,
  releaseDetailsByTerritory: ern.releaseDetailsByTerritory.map(
    (releaseDetailsByTerritory) =>
      convertReleaseDetailsByTerritory(releaseDetailsByTerritory),
  ),
  externalResourceLink: undefined,
  releaseCollectionReferenceList: undefined,
});
