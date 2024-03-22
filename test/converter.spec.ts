import { ConsoleLogger } from "@lickd/logger";
import { assert } from "chai";
import { readFileSync } from "fs";
import { createStubInstance } from "sinon";
import { Converter, Parser } from "../src";

const logger = createStubInstance(ConsoleLogger);

describe("Converter", () => {
  describe("constructor()", () => {
    it("should build a default converter", () => {
      const converter = new Converter(logger);
      assert.instanceOf(converter, Converter);
      assert.isFunction(converter.convertToErn411);
    });
  });

  describe("convert ern 383", () => {
    const parser = new Parser(logger);
    const converter = new Converter(logger);

    it("should convert 382 new message to 383 new message", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
      );
      const converted = converter.convertToErn383(parsed);

      assert.equal(converted.version, 383);
      assert.equal(converted.action, "NewReleaseMessage");
      assert.exists(converted.element);
      assert.isNotEmpty(converted.element);
      assert.isObject(converted.element);
    });

    it("should convert 383 new message to 383 new message", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
      );
      const converted = converter.convertToErn383(parsed);

      assert.equal(parsed, converted);
    });

    it("should not convert 411 new message to 383 new message", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
      );

      assert.throws(() => converter.convertToErn383(parsed));
    });
  });

  describe("convert ern 411", () => {
    const parser = new Parser(logger);
    const converter = new Converter(logger);

    it("should not convert 382 new message to 411 new message", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
      );
      const converted = converter.convertToErn411(parsed);

      assert.equal(converted.version, 411);
      assert.equal(converted.action, "NewReleaseMessage");
      assert.exists(converted.element);
      assert.isNotEmpty(converted.element);
      assert.isObject(converted.element);
    });

    it("should not convert 383 new message to 411 new message", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
      );

      const converted = converter.convertToErn411(parsed);

      assert.equal(converted.version, 411);
      assert.equal(converted.action, "NewReleaseMessage");
      assert.exists(converted.element);
      assert.isNotEmpty(converted.element);
      assert.isObject(converted.element);
    });

    it("should convert 411 new message to 411 new message", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
      );
      const converted = converter.convertToErn411(parsed);

      assert.equal(parsed, converted);
    });
  });
});
