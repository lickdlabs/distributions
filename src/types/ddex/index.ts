import * as v3 from "./3";
import * as v4 from "./4";

export * as v3 from "./3";
export * as v4 from "./4";

export type TDistroDdexVersion = v3.TDistroDdexVersion | v4.TDistroDdexVersion;

export type TDistroDdex =
  | v3.TDistroDdex<v3.TDistroDdexVersion, v3.EDistroDdexAction>
  | v4.TDistroDdex<v4.TDistroDdexVersion, v4.EDistroDdexAction>;
