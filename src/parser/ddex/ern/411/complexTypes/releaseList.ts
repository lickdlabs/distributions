import { Ern411 } from "../../../../../types";
import { parseRelease } from "./release";
import { parseTrackRelease } from "./trackRelease";

export const parseReleaseList = (object: any): Ern411.ReleaseList => ({
  release: object.Release ? parseRelease(object.Release[0]) : undefined,
  trackRelease: object.TrackRelease
    ? object.TrackRelease.map((trackRelease: any) =>
        parseTrackRelease(trackRelease),
      )
    : undefined,
});
