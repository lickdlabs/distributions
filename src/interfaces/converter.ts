import { EDistroType, TDistro } from "../types";

export interface IConverter {
  convert(distro: TDistro<EDistroType>): TDistro<EDistroType>;
}
