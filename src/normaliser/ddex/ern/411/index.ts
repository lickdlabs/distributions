import { ILogger } from "@lickd/logger";
import { Ern411 } from "../../../../types";
import { normaliseNewReleaseMessage } from "./elements";

export class Ern411Normaliser {
  public constructor(private logger: ILogger) {}

  public normalise(ern: Ern411.Ern): void {
    switch (ern.action) {
      case Ern411.Actions.NEW_RELEASE_MESSAGE:
        return normaliseNewReleaseMessage(ern);
    }
  }
}
