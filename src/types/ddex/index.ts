import * as v3 from "./v3";
import * as v4 from "./v4";

enum EVersion {
  V3 = "v3",
  V4 = "v4",
}

type TDistribution<T extends EVersion> = TDistributions[T] & {
  version: T;
};

type TDistributions = {
  [EVersion.V3]: v3.TDistribution<v3.EAction>;
  [EVersion.V4]: v4.TDistribution<v4.EAction>;
};

export { EVersion, TDistribution, v3, v4 };
