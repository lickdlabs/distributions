import { ILogger } from "@lickd/logger";
import { Ern } from "../../../types";
import { Ern382Parser } from "./382";
import { Ern383Parser } from "./383";

export class ErnParser {
  public constructor(private logger: ILogger) {}

  public parse(object: any): Ern {
    const key = Object.keys(object)[0];
    const ern = object[key].$["xmlns:ern"];
    const version = parseInt(ern.substring(ern.lastIndexOf("/") + 1));
    const action = key.replace(/ern:/, "");

    this.logger.info("parsing", { version, action });

    switch (version) {
      case 382:
        return new Ern382Parser(this.logger).parse(action, object[key]);

      case 383:
        return new Ern383Parser(this.logger).parse(action, object[key]);
    }

    throw new Error("unknown/unsupported version");
  }
}
