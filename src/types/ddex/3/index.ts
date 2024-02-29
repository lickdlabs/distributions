import { EDistroDdexAction } from "./actions";
import * as v38 from "./8";
import * as v381 from "./8/1";
import * as v382 from "./8/2";
import * as v383 from "./8/3";

export * from "./actions";
export * from "./message";

export enum EDistroDdexVersion {
  V38 = 38,
  V381 = 381,
  V382 = 382,
  V383 = 383,
}

export type TDistroDdexVersion = EDistroDdexVersion;

export type TDistroDdex<
  TVersion extends TDistroDdexVersion,
  TAction extends EDistroDdexAction,
> = {
  version: TVersion;
  action: TAction;
  message: TDistroMessages[TVersion][TAction];
};

type TDistroMessages = {
  [EDistroDdexVersion.V38]: v38.TDistroMessages;
  [EDistroDdexVersion.V381]: v381.TDistroMessages;
  [EDistroDdexVersion.V382]: v382.TDistroMessages;
  [EDistroDdexVersion.V383]: v383.TDistroMessages;
};
