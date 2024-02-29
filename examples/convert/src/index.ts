import { Distributions, v4 } from "@lickd/distributions";
import { ConsoleLogger } from "@lickd/logger";
import { readFileSync } from "fs";

const logger = new ConsoleLogger();

const distributions = new Distributions(logger);
const file = "path/to/distribution/file";

(async () => {
  const parsed = await distributions.parse(readFileSync(file).toString());
  const converted = distributions.convertToDdex(parsed, v4.EDistroDdexVersion.V411);

  logger.info({ converted });
})();
