import * as ddex from "./ddex";

export * from "./ddex";

export enum EDistroType {
  DDEX = "ddex",
}

export type TDistro<T extends EDistroType> = TDistros[T] & {
  type: T;
};

type TDistros = {
  [EDistroType.DDEX]: ddex.TDistroDdex;
};
