// https://service.ddex.net/xml/ern/38/release-notification.xsd

import { EDistroDdexAction } from "../actions";
import { TCatalogListMessage } from "./catalogListMessage";
import { TNewReleaseMessage } from "./newReleaseMessage";
import { TPurgeReleaseMessage } from "./purgeReleaseMessage";

export * from "./catalogListMessage";
export * from "./newReleaseMessage";
export * from "./purgeReleaseMessage";

export type TDistroMessage =
  | TNewReleaseMessage
  | TCatalogListMessage
  | TPurgeReleaseMessage;

export type TDistroMessages = {
  // <xs:element name="NewReleaseMessage">
  [EDistroDdexAction.NEW_RELEASE]: TNewReleaseMessage;

  // <xs:element name="CatalogListMessage">
  [EDistroDdexAction.CATALOG_LIST]: TCatalogListMessage;

  // <xs:element name="PurgeReleaseMessage">
  [EDistroDdexAction.PURGE_RELEASE]: TPurgeReleaseMessage;
};
