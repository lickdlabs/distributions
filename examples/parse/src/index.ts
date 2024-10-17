import { Distributions } from "@lickd/distributions";
import { ConsoleLogger } from "@lickd/logger";
import { readFileSync } from "fs";

const logger = new ConsoleLogger();

const distributions = new Distributions(logger);
const file = "../../examples/_ddex/382.xml";

(async () => {
  const parsed = await distributions.parse(readFileSync(file).toString(), {
    normalise: true,
  });

  logger.info({ parsed });
})();
