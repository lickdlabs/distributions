import { ConsoleLogger } from "@lickd/logger";
import { assert } from "chai";
import { readFileSync } from "fs";
import { createStubInstance } from "sinon";
import {
  ConverterError,
  Distributions,
  Ern382,
  Ern383,
  Ern411,
  ErnVersions,
} from "../src";
import { assert382, assert383, assert411 } from "./assertions";

const logger = createStubInstance(ConsoleLogger);
const distributions = new Distributions(logger);

describe("Distributions", () => {
  describe("constructor()", () => {
    it("should build a default distributions client", () => {
      assert.instanceOf(distributions, Distributions);
      assert.isFunction(distributions.parse);
    });
  });

  describe("parse ddex new message", () => {
    it("should parse 382", async () => {
      const parsed = await distributions.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
      );

      assert.equal(parsed.version, ErnVersions.ERN_382);
      assert.equal(parsed.action, Ern382.Actions.NEW_RELEASE_MESSAGE);
      assert.exists(parsed.element);
      assert.isNotEmpty(parsed.element);
      assert.isObject(parsed.element);
    });

    it("should parse 383", async () => {
      const parsed = await distributions.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
      );

      assert.equal(parsed.version, ErnVersions.ERN_383);
      assert.equal(parsed.action, Ern383.Actions.NEW_RELEASE_MESSAGE);
      assert.exists(parsed.element);
      assert.isNotEmpty(parsed.element);
      assert.isObject(parsed.element);
    });

    it("should parse 411", async () => {
      const parsed = await distributions.parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
      );

      assert.equal(parsed.version, ErnVersions.ERN_411);
      assert.equal(parsed.action, Ern411.Actions.NEW_RELEASE_MESSAGE);
      assert.exists(parsed.element);
      assert.isNotEmpty(parsed.element);
      assert.isObject(parsed.element);
    });
  });

  describe("convert ern 382 new message", () => {
    it("should convert to 382", async () => {
      const parsed = await distributions.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
        {
          version: ErnVersions.ERN_382,
        },
      );

      assert382(parsed);
    });

    it("should convert to 383", async () => {
      const parsed = await distributions.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
        {
          version: ErnVersions.ERN_383,
        },
      );

      assert383(parsed);
    });

    it("should convert to 411", async () => {
      const parsed = await distributions.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
        {
          version: ErnVersions.ERN_411,
        },
      );

      assert411(parsed);
    });
  });

  describe("convert ern 383 new message", () => {
    it("should not convert to 382", async () => {
      try {
        await distributions.parse(
          readFileSync("./examples/_ddex/383.xml").toString(),
          {
            version: ErnVersions.ERN_382,
          },
        );
      } catch (error) {
        assert.instanceOf(error, ConverterError);
      }
    });

    it("should convert to 383", async () => {
      const parsed = await distributions.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
        {
          version: ErnVersions.ERN_383,
        },
      );

      assert383(parsed);
    });

    it("should convert to 411", async () => {
      const parsed = await distributions.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
        {
          version: ErnVersions.ERN_411,
        },
      );

      assert411(parsed);
    });
  });

  describe("convert ern 411 new message", () => {
    it("should not convert to 382", async () => {
      try {
        await distributions.parse(
          readFileSync("./examples/_ddex/411.xml").toString(),
          {
            version: ErnVersions.ERN_382,
          },
        );
      } catch (error) {
        assert.instanceOf(error, ConverterError);
      }
    });

    it("should not convert to 383", async () => {
      try {
        await distributions.parse(
          readFileSync("./examples/_ddex/411.xml").toString(),
          {
            version: ErnVersions.ERN_383,
          },
        );
      } catch (error) {
        assert.instanceOf(error, ConverterError);
      }
    });

    it("should convert to 411", async () => {
      const parsed = await distributions.parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
        {
          version: ErnVersions.ERN_411,
        },
      );

      assert411(parsed);
    });
  });
});
