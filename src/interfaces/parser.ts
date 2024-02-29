import { EDistroType, TDistro } from "../types";

export interface IParser {
  parse(body: any): Promise<TDistro<EDistroType>>;
}
