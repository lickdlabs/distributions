import { ILogger } from "@lickd/logger";
import { Ern382, Ern383 } from "../../../../types";

export class Ern382Converter {
  public constructor(private logger: ILogger) {}

  public convert(ern: Ern382.Ern): Ern383.Ern {
    return {
      ...ern,
      version: 383,
    };
  }
}
