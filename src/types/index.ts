import { ILogger } from "@lickd/logger";
import { ErnVersions } from "./ddex";

export * from "./ddex";

export type DistributionsOptions = {
  logger?: ILogger;
};

export type ParserOptions<TVersion extends ErnVersions> = {
  version?: TVersion;
  normalise?: boolean;
};
