import { Ern382, Ern383 } from "../../../../../types";
import { convertRelease } from "./release";

export const convertReleaseList = (
  ern: Ern382.ReleaseList,
): Ern383.ReleaseList => ({
  ...ern,
  release: ern.release?.map((release) => convertRelease(release)),
});
