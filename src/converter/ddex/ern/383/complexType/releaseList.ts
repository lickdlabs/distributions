import { Ern383, Ern411 } from "../../../../../types";
import { convertRelease } from "./release";
import { convertTrackRelease } from "./trackRelease";

export const convertReleaseList = (
  ern: Ern383.ReleaseList,
): Ern411.ReleaseList => {
  const release = ern.release
    ?.filter((release) => release._attributes?.isMainRelease)
    .shift();
  const trackReleases = ern.release?.filter(
    (release) => !release._attributes?.isMainRelease,
  );

  return {
    release: release ? convertRelease(release) : undefined,
    trackRelease: trackReleases
      ? trackReleases.map((trackRelease) => convertTrackRelease(trackRelease))
      : undefined,
  };
};
