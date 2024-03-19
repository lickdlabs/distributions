import { NewReleaseMessage } from "./newReleaseMessage";
import { PurgeReleaseMessage } from "./purgeReleaseMessage";

export * from "./newReleaseMessage";
export * from "./purgeReleaseMessage";

export type Element = NewReleaseMessage | PurgeReleaseMessage;
