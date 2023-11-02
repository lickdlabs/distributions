import * as ddex from "./ddex";

enum EType {
  DDEX = "ddex",
}

type TDistribution<T extends EType> = TDistributions[T] & {
  type: T;
};

type TDistributions = {
  [EType.DDEX]: ddex.TDistribution<ddex.EVersion>;
};

export { EType, TDistribution, ddex };
