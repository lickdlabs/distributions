import { ErnVersions } from "..";
import {
  CatalogListMessage,
  NewReleaseMessage,
  PurgeReleaseMessage,
} from "./elements";

export * from "./complexTypes";
export * from "./elements";
export * from "./references";

export enum Actions {
  CATALOG_LIST_MESSAGE = "catalogListMessage",
  NEW_RELEASE_MESSAGE = "newReleaseMessage",
  PURGE_RELEASE_MESSAGE = "purgeReleaseMessage",
}

export type Ern =
  | ErnCatalogListMessage
  | ErnNewReleaseMessage
  | ErnPurgeReleaseMessage;

type ErnBase = {
  readonly type: "ddex";
  readonly version: ErnVersions.ERN_382;
};

export type ErnCatalogListMessage = ErnBase & {
  readonly action: Actions.CATALOG_LIST_MESSAGE;
  readonly element: CatalogListMessage;
};

export type ErnNewReleaseMessage = ErnBase & {
  readonly action: Actions.NEW_RELEASE_MESSAGE;
  readonly element: NewReleaseMessage;
};

export type ErnPurgeReleaseMessage = ErnBase & {
  readonly action: Actions.PURGE_RELEASE_MESSAGE;
  readonly element: PurgeReleaseMessage;
};
