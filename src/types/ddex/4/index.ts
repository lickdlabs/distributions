import { EDistroDdexAction } from "./actions";
import * as v411 from "./1/1";

export * from "./actions";
export * from "./message";

export enum EDistroDdexVersion {
  V411 = 411,
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
  [EDistroDdexVersion.V411]: v411.TDistroMessages;
};
