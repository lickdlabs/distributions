import {
  CatalogListMessage,
  NewReleaseMessage,
  PurgeReleaseMessage,
} from "./elements";

export * from "./complexTypes";
export * from "./elements";

export type Ern =
  | ErnCatalogListMessage
  | ErnNewReleaseMessage
  | ErnPurgeReleaseMessage;

export type ErnCatalogListMessage = {
  type: "ddex";
  version: 383;
  action: "CatalogListMessage";
  element: CatalogListMessage;
};

export type ErnNewReleaseMessage = {
  type: "ddex";
  version: 383;
  action: "NewReleaseMessage";
  element: NewReleaseMessage;
};

export type ErnPurgeReleaseMessage = {
  type: "ddex";
  version: 383;
  action: "PurgeReleaseMessage";
  element: PurgeReleaseMessage;
};
