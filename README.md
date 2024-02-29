# Distributions

> ⚠️ **Warning!**  
> 
> While in version `0.x` there is a chance of breaking changes between minor/patch version.  
> Please be cautious when upgrading between versions and check for any upgrade guides.  
> 
> Once a major version is released, this will no longer be the case and this library will follow [Semantic Versioning](https://semver.org/).

* [Details](#details)
* [Install](#install)
* [Usage](#usage)
* [Copyright info](#copyright-info)

## Details

A simple library for parsing and converting distribution files.

## Install

```shell
$ npm install @lickd/distributions @lickd/logger
```

_The Lickd logger is optional._

## Usage

### Parsing

```typescript
import { Distributions } from "@lickd/distributions";
import { ConsoleLogger } from "@lickd/logger";
import { readFileSync } from "fs";

const logger = new ConsoleLogger();

const distributions = new Distributions(logger);
const file = "path/to/distribution/file";

(async () => {
  const parsed = await distributions.parse(readFileSync(file).toString());

  logger.info({ parsed });
})();
```

### Converting

```typescript
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
```

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
