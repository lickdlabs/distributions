// https://service.ddex.net/xml/ern/411/release-notification.xsd

import { EDistroDdexAction } from "../../actions";
import { TNewReleaseMessage } from "./newReleaseMessage";
import { TPurgeReleaseMessage } from "./purgeReleaseMessage";

export * from "./newReleaseMessage";
export * from "./purgeReleaseMessage";

export type TDistroMessage = TNewReleaseMessage | TPurgeReleaseMessage;

export type TDistroMessages = {
  // <xs:element name="NewReleaseMessage">
  [EDistroDdexAction.NEW_RELEASE]: TNewReleaseMessage;

  // <xs:element name="PurgeReleaseMessage">
  [EDistroDdexAction.PURGE_RELEASE]: TPurgeReleaseMessage;
};
