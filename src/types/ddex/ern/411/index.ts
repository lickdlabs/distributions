import { ErnVersions } from "..";
import { NewReleaseMessage, PurgeReleaseMessage } from "./elements";

export * from "./complexTypes";
export * from "./elements";

export enum Actions {
  NEW_RELEASE_MESSAGE = "newReleaseMessage",
  PURGE_RELEASE_MESSAGE = "purgeReleaseMessage",
}

export type Ern = ErnNewReleaseMessage | ErnPurgeReleaseMessage;

type ErnBase = {
  readonly type: "ddex";
  readonly version: ErnVersions.ERN_411;
};

export type ErnNewReleaseMessage = ErnBase & {
  readonly action: Actions.NEW_RELEASE_MESSAGE;
  readonly element: NewReleaseMessage;
};

export type ErnPurgeReleaseMessage = ErnBase & {
  readonly action: Actions.PURGE_RELEASE_MESSAGE;
  readonly element: PurgeReleaseMessage;
};
