import { ConsoleLogger, ILogger } from "@lickd/logger";
import { Parser } from "./parser";
import { Ern } from "./types";

export class Distributions {
  private logger: ILogger;

  private parser: Parser;

  public constructor(logger?: ILogger, parser?: Parser) {
    this.logger = logger ?? new ConsoleLogger();
    this.parser = parser ?? new Parser(this.logger);
  }

  public async parse(body: string): Promise<Ern> {
    return this.parser.parse(body);
  }
}
