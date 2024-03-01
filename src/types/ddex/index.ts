import * as v3 from "./3";
import * as v4 from "./4";

export * as DdexV3 from "./3";
export * as DdexV38 from "./3/8";
export * as DdexV381 from "./3/8/1";
export * as DdexV382 from "./3/8/2";
export * as DdexV383 from "./3/8/3";

export * as DdexV4 from "./4";
export * as DdexV411 from "./4/1/1";

export type TDistroDdexVersion = v3.TDistroDdexVersion | v4.TDistroDdexVersion;

export type TDistroDdex =
  | v3.TDistroDdex<v3.TDistroDdexVersion, v3.EDistroDdexAction>
  | v4.TDistroDdex<v4.TDistroDdexVersion, v4.EDistroDdexAction>;
