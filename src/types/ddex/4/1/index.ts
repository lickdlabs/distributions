// https://service.ddex.net/xml/ern/41/release-notification.xsd

import { EDistroDdexAction } from "../actions";
import { TNewReleaseMessage } from "./newReleaseMessage";
import { TPurgeReleaseMessage } from "./purgeReleaseMessage";

export * from "./newReleaseMessage";
export * from "./purgeReleaseMessage";

export type TDistroDdex41<T extends EDistroDdexAction> = {
  action: T;
  message: TDistroMessages[T];
};

export type TDistroMessage = TNewReleaseMessage | TPurgeReleaseMessage;

type TDistroMessages = {
  // <xs:element name="NewReleaseMessage">
  [EDistroDdexAction.NEW_RELEASE]: TNewReleaseMessage;

  // <xs:element name="PurgeReleaseMessage">
  [EDistroDdexAction.PURGE_RELEASE]: TPurgeReleaseMessage;
};
