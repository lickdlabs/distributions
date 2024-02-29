// https://service.ddex.net/xml/ern/43/release-notification.xsd

import { EDistroDdexAction } from "../actions";
import { TNewReleaseMessage } from "./newReleaseMessage";
import { TPurgeReleaseMessage } from "./purgeReleaseMessage";

export type TDistroDdex43<T extends EDistroDdexAction> = {
  action: T;
  message: TDistroMessages[T];
};

type TDistroMessages = {
  // <xs:element name="NewReleaseMessage">
  [EDistroDdexAction.NEW_RELEASE]: TNewReleaseMessage;

  // <xs:element name="PurgeReleaseMessage">
  [EDistroDdexAction.PURGE_RELEASE]: TPurgeReleaseMessage;
};
