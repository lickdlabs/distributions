import { Ern411 } from "../../../../../types";
import { parseRelease } from "./release";

export const parseReleaseList = (object: any): Ern411.ReleaseList => ({
  release: object.Release ? parseRelease(object.Release[0]) : undefined,
  // @todo trackRelease: TrackRelease[];
});
