import { ILogger } from "@lickd/logger";
import { Parser } from "./parser";
import { EDistroType, TDistro } from "./types";

export class Distributions {
  private parser: Parser;

  public constructor(
    private logger: ILogger,
    parser?: Parser,
  ) {
    this.parser = parser ?? new Parser(logger);
  }

  public async parse(body: string): Promise<TDistro<EDistroType>> {
    return this.parser.parse(body);
  }
}
