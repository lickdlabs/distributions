import { ConsoleLogger } from "@lickd/logger";
import { assert } from "chai";
import { readFileSync } from "fs";
import { createStubInstance } from "sinon";
import { Converter, ConverterError, Parser, ErnVersions } from "../src";
import { assert382, assert383, assert411 } from "./assertions";

const logger = createStubInstance(ConsoleLogger);
const parser = new Parser(logger);
const converter = new Converter(logger);

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
      const converted = converter.convert(parsed, ErnVersions.ERN_382);

      assert382(converted);
    });

    it("should convert to 383", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
      );
      const converted = converter.convert(parsed, ErnVersions.ERN_383);

      assert383(converted);
    });

    it("should convert to 411", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
      );
      const converted = converter.convert(parsed, ErnVersions.ERN_411);

      assert411(converted);
    });
  });

  describe("convert ern 383 new message", () => {
    it("should not convert to 382", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
      );

      assert.throws(
        () => converter.convert(parsed, ErnVersions.ERN_382),
        ConverterError,
      );
    });

    it("should convert to 383", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
      );
      const converted = converter.convert(parsed, ErnVersions.ERN_383);

      assert383(converted);
    });

    it("should convert to 411", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
      );
      const converted = converter.convert(parsed, ErnVersions.ERN_411);

      assert411(converted);
    });
  });

  describe("convert ern 411 new message", () => {
    it("should not convert to 382", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
      );

      assert.throws(
        () => converter.convert(parsed, ErnVersions.ERN_382),
        ConverterError,
      );
    });

    it("should not convert to 383", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
      );

      assert.throws(
        () => converter.convert(parsed, ErnVersions.ERN_383),
        ConverterError,
      );
    });

    it("should convert to 411", async () => {
      const parsed = await parser.parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
      );
      const converted = converter.convert(parsed, ErnVersions.ERN_411);

      assert411(converted);
    });
  });
});
