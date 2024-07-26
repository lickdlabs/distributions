import { ConsoleLogger } from "@lickd/logger";
import { assert } from "chai";
import { readFileSync } from "fs";
import { createStubInstance } from "sinon";
import { Converter, Ern, Ern382, Ern383, Ern411, Parser } from "../src";

const logger = createStubInstance(ConsoleLogger);
const parser = new Parser(logger);
const converter = new Converter(logger);

const assert382 = (converted: Ern) => {
  assert.equal(converted.version, 382);
  assert.equal(converted.action, Ern382.Actions.NEW_RELEASE_MESSAGE);
  assert.exists(converted.element);
  assert.isNotEmpty(converted.element);
  assert.isObject(converted.element);
};

const assert383 = (converted: Ern) => {
  assert.equal(converted.version, 383);
  assert.equal(converted.action, Ern383.Actions.NEW_RELEASE_MESSAGE);
  assert.exists(converted.element);
  assert.isNotEmpty(converted.element);
  assert.isObject(converted.element);
};

const assert411 = (converted: Ern) => {
  assert.equal(converted.version, 411);
  assert.equal(converted.action, Ern411.Actions.NEW_RELEASE_MESSAGE);
  assert.exists(converted.element);
  assert.isNotEmpty(converted.element);
  assert.isObject(converted.element);
};

describe("Converter", () => {
  describe("constructor()", () => {
    it("should build a default converter", () => {
      assert.instanceOf(converter, Converter);
      assert.isFunction(converter.convert);
    });
  });

  describe("convert ern 382 new message", () => {
    it("should convert to 382", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
      );
      const converted = converter.convert<Ern382.Ern>(parsed, 382);

      assert382(converted);
    });

    it("should convert to 383", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
      );
      const converted = converter.convert<Ern383.Ern>(parsed, 383);

      assert383(converted);
    });

    it("should convert to 411", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
      );
      const converted = converter.convert<Ern411.Ern>(parsed, 411);

      assert411(converted);
    });
  });

  describe("convert ern 383 new message", () => {
    it("should not convert to 382", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
      );

      assert.throws(() => converter.convert<Ern382.Ern>(parsed, 382));
    });

    it("should convert to 383", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
      );
      const converted = converter.convert<Ern383.Ern>(parsed, 383);

      assert383(converted);
    });

    it("should convert to 411", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
      );
      const converted = converter.convert<Ern411.Ern>(parsed, 411);

      assert411(converted);
    });
  });

  describe("convert ern 411 new message", () => {
    it("should not convert to 382", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
      );

      assert.throws(() => converter.convert<Ern382.Ern>(parsed, 382));
    });

    it("should not convert to 383", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
      );

      assert.throws(() => converter.convert<Ern383.Ern>(parsed, 383));
    });

    it("should convert to 411", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
      );
      const converted = converter.convert<Ern411.Ern>(parsed, 411);

      assert411(converted);
    });
  });
});
