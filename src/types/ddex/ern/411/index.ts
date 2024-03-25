import { NewReleaseMessage, PurgeReleaseMessage } from "./elements";

export * from "./complexTypes";
export * from "./elements";

export enum Actions {
  NEW_RELEASE_MESSAGE = "NewReleaseMessage",
  PURGE_RELEASE_MESSAGE = "PurgeReleaseMessage",
}

export type Ern = ErnNewReleaseMessage | ErnPurgeReleaseMessage;

type ErnBase = {
  readonly type: "ddex";
  readonly version: 411;
};

export type ErnNewReleaseMessage = ErnBase & {
  readonly action: Actions.NEW_RELEASE_MESSAGE;
  readonly element: NewReleaseMessage;
};

export type ErnPurgeReleaseMessage = ErnBase & {
  readonly action: Actions.PURGE_RELEASE_MESSAGE;
  readonly element: PurgeReleaseMessage;
};
