// https://service.ddex.net/xml/ern/411/release-notification.xsd

import { TNewReleaseMessage } from "./newReleaseMessage";

export enum EDistroDdexV4Action {
  NEW_RELEASE = "newReleaseMessage",
  PURGE_RELEASE = "purgeReleaseMessage",
}

export type TDistroDdexV4<T extends EDistroDdexV4Action> = {
  action: T;
  message: TDistroMessages[T];
};

type TDistroMessages = {
  // <xs:element name="NewReleaseMessage">
  [EDistroDdexV4Action.NEW_RELEASE]: TNewReleaseMessage;
  // <xs:element name="PurgeReleaseMessage">
  [EDistroDdexV4Action.PURGE_RELEASE]: {};
};
