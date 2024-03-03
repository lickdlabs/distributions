import { ConsoleLogger } from "@lickd/logger";
import { assert } from "chai";
import { readFileSync } from "fs";
import { createStubInstance } from "sinon";
import { EDistroType, Parser } from "../src";
import * as v3 from "../src/types/ddex/3";
import * as v4 from "../src/types/ddex/4";

const logger = createStubInstance(ConsoleLogger);

describe("Parser", () => {
  describe("constructor()", () => {
    it("should build a default parser", () => {
      const parser = new Parser(logger);
      assert.instanceOf(parser, Parser);
      assert.isFunction(parser.parse);
    });
  });

  describe("parse ddex", () => {
    const parser = new Parser(logger);

    it("should parse 382 new message", async () => {
      const parsed = await parser.parse(readFileSync("./examples/_ddex/382.xml").toString());

      assert.equal(parsed.type, EDistroType.DDEX);
      assert.equal(parsed.version, v3.EDistroDdexVersion.V382);
      assert.equal(parsed.action, v3.EDistroDdexAction.NEW_RELEASE);
      assert.exists(parsed.message);
      assert.isNotEmpty(parsed.message);
      assert.isObject(parsed.message);
    });

    it("should parse 411 new message", async () => {
      const parsed = await parser.parse(readFileSync("./examples/_ddex/411.xml").toString());
      
      assert.equal(parsed.type, EDistroType.DDEX);
      assert.equal(parsed.version, v4.EDistroDdexVersion.V411);
      assert.equal(parsed.action, v4.EDistroDdexAction.NEW_RELEASE);
      assert.exists(parsed.message);
      assert.isNotEmpty(parsed.message);
      assert.isObject(parsed.message);
    });
  });
});
