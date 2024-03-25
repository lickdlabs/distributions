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

export type Ern =
  | ErnCatalogListMessage
  | ErnNewReleaseMessage
  | ErnPurgeReleaseMessage;

type ErnBase = {
  readonly type: "ddex";
  readonly version: 383;
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
