import * as Ern382 from "./382";
import * as Ern383 from "./383";
import * as Ern411 from "./411";

export * as Ern382 from "./382";
export * as Ern383 from "./383";
export * as Ern411 from "./411";

export enum ErnVersions {
  ERN_382 = 382,
  ERN_383 = 383,
  ERN_411 = 411,
}

export type Ern = {
  [ErnVersions.ERN_382]: Ern382.Ern;
  [ErnVersions.ERN_383]: Ern383.Ern;
  [ErnVersions.ERN_411]: Ern411.Ern;
};

export type Erns = Ern[keyof Ern];
