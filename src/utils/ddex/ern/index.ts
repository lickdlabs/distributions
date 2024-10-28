import { Ern382, Ern383, Ern411, Erns, ErnVersions } from "../../../types";

export * as ern411 from "./411";

export const is382 = (distro: Erns): distro is Ern382.Ern =>
  distro.version === ErnVersions.ERN_382;

export const is383 = (distro: Erns): distro is Ern383.Ern =>
  distro.version === ErnVersions.ERN_383;

export const is411 = (distro: Erns): distro is Ern411.Ern =>
  distro.version === ErnVersions.ERN_411;
