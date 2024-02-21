import { EDistroDdexV3Action, TDistroDdexV3 } from "./v3";
import { EDistroDdexV4Action, TDistroDdexV4 } from "./v4";

export enum EDistroDdexVersion {
  V3 = "v3",
  V4 = "v4",
}

export type TDistroDdex<T extends EDistroDdexVersion> = TDistrosDdex[T] & {
  version: number;
};

type TDistrosDdex = {
  [EDistroDdexVersion.V3]: TDistroDdexV3<EDistroDdexV3Action>;
  [EDistroDdexVersion.V4]: TDistroDdexV4<EDistroDdexV4Action>;
};
