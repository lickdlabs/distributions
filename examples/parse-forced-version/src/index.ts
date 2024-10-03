import { Distributions, Ern, ParserError } from "@lickd/distributions";
import { ConsoleLogger } from "@lickd/logger";
import { readFileSync } from "fs";

const logger = new ConsoleLogger();

const distributions = new Distributions(logger);
const file = "../../examples/_ddex/381.xml";

(async () => {
  const body = readFileSync(file).toString();

  let parsed: Ern | undefined;

  try {
    parsed = await distributions.parse(body);
  } catch (error) {
    logger.error({ error });

    if (error instanceof ParserError) {
      switch (error.version) {
        case 381:
          parsed = await distributions.parse(body, 382);
          break;

        default:
          throw error;
      }
    }

    if (!(error instanceof ParserError)) {
      throw error;
    }
  }

  logger.info({ parsed });
})();
