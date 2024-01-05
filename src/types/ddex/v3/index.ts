// https://service.ddex.net/xml/ern/383/release-notification.xsd

import { TNewReleaseMessage } from "./newReleaseMessage";

export enum EDistroDdexV3Action {
  NEW_RELEASE = "NewReleaseMessage",
  CATALOG_LIST = "CatalogListMessage",
  PURGE_RELEASE = "PurgeReleaseMessage",
}

export type TDistroDdexV3<T extends EDistroDdexV3Action> = {
  action: T;
  message: TDistroMessages[T];
};

type TDistroMessages = {
  // <xs:element name="NewReleaseMessage">
  [EDistroDdexV3Action.NEW_RELEASE]: TNewReleaseMessage;
  // <xs:element name="CatalogListMessage">
  [EDistroDdexV3Action.CATALOG_LIST]: {};
  // <xs:element name="PurgeReleaseMessage">
  [EDistroDdexV3Action.PURGE_RELEASE]: {};
};
