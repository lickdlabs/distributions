import { CatalogListMessage } from "./catalogListMessage";
import { NewReleaseMessage } from "./newReleaseMessage";
import { PurgeReleaseMessage } from "./purgeReleaseMessage";

export * from "./catalogListMessage";
export * from "./newReleaseMessage";
export * from "./purgeReleaseMessage";

export type Element =
  | CatalogListMessage
  | NewReleaseMessage
  | PurgeReleaseMessage;
