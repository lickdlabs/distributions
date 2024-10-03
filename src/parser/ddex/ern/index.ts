import { ILogger } from "@lickd/logger";
import { ParserError } from "../../../errors";
import { Ern } from "../../../types";
import { Ern382Parser } from "./382";
import { Ern383Parser } from "./383";
import { Ern411Parser } from "./411";

export class ErnParser {
  public constructor(private logger: ILogger) {}

  public parse(object: any): Ern {
    const key = Object.keys(object)[0];
    const ern = object[key].$["xmlns:ern"];
    const version = parseInt(ern.substring(ern.lastIndexOf("/") + 1));
    const action = key.replace(/ern:/, "");

    this.logger.info("parsing object to ddex ern", { version, action });

    const parsed = this.parseObject(version, action, object[key]);

    this.logger.info("successfully parsed object to ddex ern", {
      version: parsed.version,
      action: parsed.action,
    });

    return parsed;
  }

  private parseObject(version: number, action: string, object: any): Ern {
    switch (version) {
      case 382:
        return new Ern382Parser(this.logger).parse(action, object);

      case 383:
        return new Ern383Parser(this.logger).parse(action, object);

      case 411:
        return new Ern411Parser(this.logger).parse(action, object);
    }

    throw new ParserError({
      version,
      action,
      message: "unknown/unsupported version",
    });
  }
}
