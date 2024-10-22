import { assert } from "chai";
import { readFileSync } from "fs";
import { Distributions, InvalidError } from "../src";
import { parseDuration } from "../src/parser/ddex/ern/utils";
import { assert382, assert383, assert411 } from "./assertions";

const distributions = new Distributions();

describe("Parser", () => {
  describe("parse ddex new message", () => {
    it("should parse 382", async () => {
      const parsed = await distributions.parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
      );

      assert382(parsed);
    });

    it("should parse 383", async () => {
      const parsed = await distributions.parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
      );

      assert383(parsed);
    });

    it("should parse 411", async () => {
      const parsed = await distributions.parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
      );

      assert411(parsed);
    });
  });
});

describe("Utils", () => {
  const assertConverted = (converted: any, expected: number) => {
    assert.isNumber(converted);
    assert.isAtLeast(converted, 1000);
    assert.equal(converted, expected);
  };

  describe("parseDuration()", () => {
    it("should convert valid duration (seconds - no decimal)", () => {
      const converted = parseDuration("PT1S");

      assertConverted(converted, 1000);
    });

    it("should convert valid duration (seconds - no decimal > 60)", () => {
      const converted = parseDuration("PT100S");

      assertConverted(converted, 100000);
    });

    it("should convert valid duration (seconds - decimal)", () => {
      const converted = parseDuration("PT1.999S");

      assertConverted(converted, 1999);
    });

    it("should convert valid duration (seconds - too many decimals)", () => {
      const converted = parseDuration("PT1.99999999S");

      assertConverted(converted, 2000);
    });

    it("should convert valid duration (minutes)", () => {
      const converted = parseDuration("PT1M");

      assertConverted(converted, 60000);
    });

    it("should convert valid duration (minutes > 60)", () => {
      const converted = parseDuration("PT100M");

      assertConverted(converted, 6000000);
    });

    it("should convert valid duration (hours)", () => {
      const converted = parseDuration("PT1H");

      assertConverted(converted, 3600000);
    });

    it("should convert valid duration (hours > 24)", () => {
      const converted = parseDuration("PT100H");

      assertConverted(converted, 360000000);
    });

    it("should convert valid duration (full - no decimal)", () => {
      const converted = parseDuration("PT1H1M1S");

      assertConverted(converted, 3661000);
    });

    it("should convert valid duration (full - decimal)", () => {
      const converted = parseDuration("PT1H1M1.999S");

      assertConverted(converted, 3661999);
    });

    it("should convert valid duration (invalid)", () => {
      assert.throws(() => parseDuration("test"), InvalidError);
    });
  });
});
