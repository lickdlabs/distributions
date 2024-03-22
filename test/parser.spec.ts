import { ConsoleLogger } from "@lickd/logger";
import { assert } from "chai";
import { readFileSync } from "fs";
import { createStubInstance } from "sinon";
import { Ern382, Ern383, Ern411, Parser } from "../src";

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
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
      );

      assert.equal(parsed.version, 382);
      assert.equal(parsed.action, Ern382.Actions.NEW_RELEASE_MESSAGE);
      assert.exists(parsed.element);
      assert.isNotEmpty(parsed.element);
      assert.isObject(parsed.element);
    });

    it("should parse 383 new message", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
      );

      assert.equal(parsed.version, 383);
      assert.equal(parsed.action, Ern383.Actions.NEW_RELEASE_MESSAGE);
      assert.exists(parsed.element);
      assert.isNotEmpty(parsed.element);
      assert.isObject(parsed.element);
    });

    it("should parse 411 new message", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
      );

      assert.equal(parsed.version, 411);
      assert.equal(parsed.action, Ern411.Actions.NEW_RELEASE_MESSAGE);
      assert.exists(parsed.element);
      assert.isNotEmpty(parsed.element);
      assert.isObject(parsed.element);
    });
  });
});
