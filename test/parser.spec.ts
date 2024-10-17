import { ConsoleLogger } from "@lickd/logger";
import { assert } from "chai";
import { readFileSync } from "fs";
import { createStubInstance } from "sinon";
import { Ern382, Ern383, Ern411, Parser, ErnVersions } from "../src";

const logger = createStubInstance(ConsoleLogger);
const parser = new Parser(logger);

describe("Parser", () => {
  describe("constructor()", () => {
    it("should build a default parser", () => {
      assert.instanceOf(parser, Parser);
      assert.isFunction(parser.parse);
    });
  });

  describe("parse ddex new message", () => {
    it("should parse 382", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
      );

      assert.equal(parsed.version, ErnVersions.ERN_382);
      assert.equal(parsed.action, Ern382.Actions.NEW_RELEASE_MESSAGE);
      assert.exists(parsed.element);
      assert.isNotEmpty(parsed.element);
      assert.isObject(parsed.element);
    });

    it("should parse 383", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
      );

      assert.equal(parsed.version, ErnVersions.ERN_383);
      assert.equal(parsed.action, Ern383.Actions.NEW_RELEASE_MESSAGE);
      assert.exists(parsed.element);
      assert.isNotEmpty(parsed.element);
      assert.isObject(parsed.element);
    });

    it("should parse 411", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
      );

      assert.equal(parsed.version, ErnVersions.ERN_411);
      assert.equal(parsed.action, Ern411.Actions.NEW_RELEASE_MESSAGE);
      assert.exists(parsed.element);
      assert.isNotEmpty(parsed.element);
      assert.isObject(parsed.element);
    });
  });
});
