import { Distributions, Ern411 } from "@lickd/distributions";
import { ConsoleLogger } from "@lickd/logger";
import { readFileSync } from "fs";

const logger = new ConsoleLogger();

const distributions = new Distributions(logger);
const file = "../../examples/_ddex/382.xml";

(async () => {
  const parsed = await distributions.parse(readFileSync(file).toString());

  logger.info({ parsed });

  const converted = distributions.convert<Ern411.Ern>(parsed, 411);

  logger.info({ converted });
})();
