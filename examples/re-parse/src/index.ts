import { Distributions, ErnVersions } from "@lickd/distributions";
import { ConsoleLogger } from "@lickd/logger";
import { readFileSync } from "fs";

const logger = new ConsoleLogger();
const distributions = new Distributions({ logger });

const file = "../../examples/_ddex/382.json";

(async () => {
  const parsed = await distributions.parse(readFileSync(file).toString(), {
    version: ErnVersions.ERN_411,
    normalise: true,
  });

  logger.info({ parsed });
})();
