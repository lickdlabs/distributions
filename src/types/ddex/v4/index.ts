import { TNewRelease } from "./newRelease";

enum EAction {
  NEW_RELEASE = "newRelease",
}

type TDistribution<T extends EAction> = {
  action: T;
  message: TDistributions[T];
};

type TDistributions = {
  [EAction.NEW_RELEASE]: TNewRelease;
};

type TFile = {
  uri: string;
  hashSum: {
    algorithm: string;
    hashSumValue: string;
  };
};

export { EAction, TDistribution, TFile };
