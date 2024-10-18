import { Distributions, ErnVersions } from "@lickd/distributions";
import { ConsoleLogger } from "@lickd/logger";
import { readFileSync } from "fs";

const logger = new ConsoleLogger();
const distributions = new Distributions({ logger });

const file = "../../examples/_ddex/382.xml";

(async () => {
  const parsed = await distributions.parse(readFileSync(file).toString());

  logger.info({ parsed });

  const converted = await distributions.parse(parsed, {
    version: ErnVersions.ERN_411,
    normalise: true,
  });

  logger.info({ converted });
})();
