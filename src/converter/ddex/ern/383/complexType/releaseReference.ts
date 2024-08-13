import { randomUUID } from "crypto";
import { Ern383, Ern411 } from "../../../../../types";

export const convertReleaseReference = (
  ern: Ern383.Release["releaseReference"],
):
  | Ern411.Release["releaseReference"]
  | Ern411.TrackRelease["releaseReference"] =>
  (ern?.shift() || `R_${randomUUID()}`) as
    | Ern411.Release["releaseReference"]
    | Ern411.TrackRelease["releaseReference"];
