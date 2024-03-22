import { NewReleaseMessage, PurgeReleaseMessage } from "./elements";

export * from "./complexTypes";
export * from "./elements";

export enum Actions {
  NEW_RELEASE_MESSAGE = "NewReleaseMessage",
  PURGE_RELEASE_MESSAGE = "PurgeReleaseMessage",
}

export type Ern<T extends Actions> = {
  type: "ddex";
  version: 411;
  action: T;
  element: Elements[T];
};

type Elements = {
  [Actions.NEW_RELEASE_MESSAGE]: NewReleaseMessage;
  [Actions.PURGE_RELEASE_MESSAGE]: PurgeReleaseMessage;
};
