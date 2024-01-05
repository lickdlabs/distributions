import { TNewReleaseMessage as V3 } from "../../../../../../types/ddex/v3/newReleaseMessage";
import { TNewReleaseMessage } from "../../../../../../types/ddex/v4/newReleaseMessage";
import { resourceList } from "./resourceList";

export const newReleaseMessage = (message: V3): TNewReleaseMessage => {
  return {
    resourceList: resourceList(message.resourceList),
  };
};
