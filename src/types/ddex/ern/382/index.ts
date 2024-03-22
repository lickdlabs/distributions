import {
  CatalogListMessage,
  NewReleaseMessage,
  PurgeReleaseMessage,
} from "./elements";

export * from "./complexTypes";
export * from "./elements";

export enum Actions {
  CATALOG_LIST_MESSAGE = "CatalogListMessage",
  NEW_RELEASE_MESSAGE = "NewReleaseMessage",
  PURGE_RELEASE_MESSAGE = "PurgeReleaseMessage",
}

export type Ern<T extends Actions> = {
  type: "ddex";
  version: 382;
  action: T;
  element: Elements[T];
};

type Elements = {
  [Actions.CATALOG_LIST_MESSAGE]: CatalogListMessage;
  [Actions.NEW_RELEASE_MESSAGE]: NewReleaseMessage;
  [Actions.PURGE_RELEASE_MESSAGE]: PurgeReleaseMessage;
};
