import { TNewRelease } from "./newRelease";

export enum EDistroDdexV3Action {
  NEW_RELEASE = "newRelease",
}

export type TDistroDdexV3<T extends EDistroDdexV3Action> = {
  action: T;
  message: TDistros[T];
};

type TDistros = {
  [EDistroDdexV3Action.NEW_RELEASE]: TNewRelease;
};
