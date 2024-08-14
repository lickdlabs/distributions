import { Ern382, Ern383 } from "../../../../../types";
import { convertRelease } from "./release";

export const convertReleaseList = (
  releaseList: Ern382.ReleaseList,
): Ern383.ReleaseList => ({
  ...releaseList,
  release: releaseList.release?.map((release) => convertRelease(release)),
});
