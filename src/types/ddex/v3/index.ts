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
  fileName: string;
  filePath?: string;
  hashSum: {
    hashSum: string;
    hashSumAlgorithmType: string;
  };
};

export { EAction, TDistribution, TDistributions, TFile };
