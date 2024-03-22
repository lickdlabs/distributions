import { NewReleaseMessage, PurgeReleaseMessage } from "./elements";

export * from "./complexTypes";
export * from "./elements";

export type Ern = ErnNewReleaseMessage | ErnPurgeReleaseMessage;

export type ErnNewReleaseMessage = {
  type: "ddex";
  version: 411;
  action: "NewReleaseMessage";
  element: NewReleaseMessage;
};

export type ErnPurgeReleaseMessage = {
  type: "ddex";
  version: 411;
  action: "PurgeReleaseMessage";
  element: PurgeReleaseMessage;
};
