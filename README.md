# Distributions

- [Details](#details)
- [Install](#install)
- [Usage](#usage)
  - [Parsing](#parsing)
  - [Converting](#converting)
- [Known issues](#known-issues)
- [Copyright info](#copyright-info)

## Details

> ⚠️ **Warning!**
>
> While in version `0.x` there is a chance of breaking changes between minor/patch version.  
> Please be cautious when upgrading between versions and check for any upgrade guides.
>
> Once a major version is released, this will no longer be the case and this library will follow [Semantic Versioning](https://semver.org/).

A library for parsing and converting distribution files.

## Install

```shell
$ npm install @lickd/distributions @lickd/logger
```

## Usage

Examples can be found in the [examples](./examples/) folder.

### Parsing

```typescript
import { Distributions } from "@lickd/distributions";
import { readFileSync } from "fs";

const distributions = new Distributions();
const file = "path/to/distribution/file";

(async () => {
  const parsed = await distributions.parse(readFileSync(file).toString());

  console.log({ parsed });
})();
```

### Converting

```typescript
import { Distributions, Ern411, ErnVersions } from "@lickd/distributions";
import { readFileSync } from "fs";

const distributions = new Distributions();
const file = "path/to/distribution/file";

(async () => {
  const parsed = await distributions.parse(readFileSync(file).toString(), {
    version: ErnVersions.ERN_411,
  });

  console.log({ parsed });
})();
```

### Logging

#### Enabling logging

```typescript
import { Distributions } from "@lickd/distributions";

const distributions = new Distributions({
  logger: console,
});
```

#### Custom logger

```typescript
import { Distributions } from "@lickd/distributions";
import { ConsoleLogger } from "@lickd/logger";

const logger = new ConsoleLogger();
const distributions = new Distributions({ logger });
```

## Known issues

### Parsing

#### DDEX 411+ - DisplayCredits

Due to the definition of [DisplayCredits](https://service.ddex.net/xml/ern/411/release-notification.xsd#folder1890)
if the `sequence` for `DisplayCreditParty` and `NameUsedInDisplayCredit` does not have both values then the parsed result
will not be correct.

```xml
<DisplayCredits>
  <DisplayCreditText>Test</DisplayCreditText>
  <DisplayCreditParty>P1</DisplayCreditParty>
  <NameUsedInDisplayCredit>Credit1</NameUsedInDisplayCredit>
  <DisplayCreditParty>P2</DisplayCreditParty>
  <NameUsedInDisplayCredit>Credit2</NameUsedInDisplayCredit>
  <DisplayCreditParty>P3</DisplayCreditParty>
  <!-- <NameUsedInDisplayCredit>P3</NameUsedInDisplayCredit> -->
  <DisplayCreditParty>P4</DisplayCreditParty>
  <NameUsedInDisplayCredit>Credit4</NameUsedInDisplayCredit>
</DisplayCredits>
```

Notice how `P3` has the `NameUsedInDisplayCredit` commented out, this will result in the following:

```json
[
  {
    "displayCreditPartyList": "P1",
    "nameUsedInDisplayCredit": "Credit1"
  },
  {
    "displayCreditPartyList": "P2",
    "nameUsedInDisplayCredit": "Credit2"
  },
  {
    "displayCreditPartyList": "P3",
    "nameUsedInDisplayCredit": "Credit4"
  },
  {
    "displayCreditPartyList": "P4"
  }
]
```

This is because when we convert the raw XML into raw JSON we get the following:

```json
{
  "DisplayCreditText": ["Test"],
  "DisplayCreditParty": ["P1", "P2", "P3", "P4"],
  "NameUsedInDisplayCredit": ["Credit1", "Credit2", "Credit4"]
}
```

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
