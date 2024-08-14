import { Ern382, Ern383 } from "../../../../../types";
import { convertReleaseDetailsByTerritory } from "./releaseDetailsByTerritory";

export const convertRelease = (release: Ern382.Release): Ern383.Release => ({
  ...release,
  releaseDetailsByTerritory: release.releaseDetailsByTerritory.map(
    (releaseDetailsByTerritory) =>
      convertReleaseDetailsByTerritory(releaseDetailsByTerritory),
  ),
  externalResourceLink: undefined,
  releaseCollectionReferenceList: undefined,
});
