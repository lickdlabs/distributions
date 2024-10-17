import { Ern411 } from "../../../../types";
import { normaliseNewReleaseMessage } from "./elements";

export const normalise411 = (ern: Ern411.Ern): void => {
  switch (ern.action) {
    case Ern411.Actions.NEW_RELEASE_MESSAGE:
      return normaliseNewReleaseMessage(ern);
  }
};
