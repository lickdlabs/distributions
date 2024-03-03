import { ConsoleLogger } from "@lickd/logger";
import { assert } from "chai";
import { readFileSync } from "fs";
import { createStubInstance } from "sinon";
import { EDistroType, Parser } from "../src";
import { Converter } from "../src/converter";
import * as v3 from "../src/types/ddex/3";
import * as v4 from "../src/types/ddex/4";

const logger = createStubInstance(ConsoleLogger);

describe("Converter", () => {
  describe("constructor()", () => {
    it("should build a default converter", () => {
      const converter = new Converter(logger);
      assert.instanceOf(converter, Converter);
      assert.isFunction(converter.convertToDdex);
    });
  });

  describe("convert ddex", () => {
    const parser = new Parser(logger);
    const converter = new Converter(logger);

    it("should convert 382 new message to 411 new message", async () => {
      const parsed = await parser.parse(readFileSync("./examples/_ddex/382.xml").toString());
      const converted = converter.convertToDdex(parsed, v4.EDistroDdexVersion.V411);

      assert.equal(converted.type, EDistroType.DDEX);
      assert.equal(converted.version, v4.EDistroDdexVersion.V411);
      assert.equal(converted.action, v4.EDistroDdexAction.NEW_RELEASE);
      assert.exists(parsed.message);
      assert.isNotEmpty(parsed.message);
      assert.isObject(parsed.message);
    });

    it("should convert 411 new message to 411 new message", async () => {
      const parsed = await parser.parse(readFileSync("./examples/_ddex/411.xml").toString());
      const converted = converter.convertToDdex(parsed, v4.EDistroDdexVersion.V411);

      assert.equal(converted.type, EDistroType.DDEX);
      assert.equal(converted.version, v4.EDistroDdexVersion.V411);
      assert.equal(converted.action, v4.EDistroDdexAction.NEW_RELEASE);
      assert.exists(parsed.message);
      assert.isNotEmpty(parsed.message);
      assert.isObject(parsed.message);
    });
  });
});
