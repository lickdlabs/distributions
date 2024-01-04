import { TNewRelease } from "./newRelease";

export enum EDistroDdexV4Action {
  NEW_RELEASE = "newRelease",
}

export type TDistroDdexV4<T extends EDistroDdexV4Action> = {
  action: T;
  message: TDistros[T];
};

type TDistros = {
  [EDistroDdexV4Action.NEW_RELEASE]: TNewRelease;
};
