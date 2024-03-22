import { ILogger } from "@lickd/logger";
import { Ern, Ern411 } from "../../../../types";
import { Ern382Converter } from "./382";
import { Ern383Converter } from "./383";

export class Ern411Converter {
  public constructor(private logger: ILogger) {}

  public convert(ern: Ern): Ern411.Ern<Ern411.Actions> {
    this.logger.info("converting to ern 411 from", {
      version: ern.version,
      action: ern.action,
    });

    switch (ern.version) {
      case 411:
        return ern;
    }

    throw new Error("unknown/unsupported conversion");
  }
}
