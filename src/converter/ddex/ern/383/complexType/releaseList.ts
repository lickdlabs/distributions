import { Ern383, Ern411 } from "../../../../../types";
import { convertRelease } from "./release";
import { convertTrackRelease } from "./trackRelease";

export const convertReleaseList = (
  parties: Ern411.Party[],
  ern: Ern383.ReleaseList,
): Ern411.ReleaseList => {
  const release = ern.release
    ?.filter((release) => release._attributes?.isMainRelease)
    .shift();

  const trackReleases = ern.release?.filter(
    (release) => !release._attributes?.isMainRelease,
  );

  return {
    release: release
      ? convertRelease(
          parties,
          release,
          release.releaseDetailsByTerritory.shift(),
        )
      : undefined,
    trackRelease: trackReleases
      ? trackReleases.map((trackRelease) =>
          convertTrackRelease(
            parties,
            trackRelease,
            trackRelease.releaseDetailsByTerritory.shift(),
          ),
        )
      : undefined,
  };
};
