import { convertDurationToMilliseconds } from "../src/utils";
import { assert } from "chai";

function assertConverted(converted: any, expected: number) {
  assert.isNumber(converted);
  assert.isAtLeast(converted, 1000);
  assert.equal(converted, expected);
}

describe("Utils", () => {
  describe("convertDurationToMilliseconds()", () => {
    it("should convert valid duration (seconds - no decimal)", () => {
      const converted = convertDurationToMilliseconds("PT1S");

      assertConverted(converted, 1000);
    });

    it("should convert valid duration (seconds - no decimal > 60)", () => {
      const converted = convertDurationToMilliseconds("PT100S");

      assertConverted(converted, 100000);
    });

    it("should convert valid duration (seconds - decimal)", () => {
      const converted = convertDurationToMilliseconds("PT1.999S");

      assertConverted(converted, 1999);
    });

    it("should convert valid duration (seconds - too many decimals)", () => {
      const converted = convertDurationToMilliseconds("PT1.99999999S");

      assertConverted(converted, 2000);
    });

    it("should convert valid duration (minutes)", () => {
      const converted = convertDurationToMilliseconds("PT1M");

      assertConverted(converted, 60000);
    });

    it("should convert valid duration (minutes > 60)", () => {
      const converted = convertDurationToMilliseconds("PT100M");

      assertConverted(converted, 6000000);
    });

    it("should convert valid duration (hours)", () => {
      const converted = convertDurationToMilliseconds("PT1H");

      assertConverted(converted, 3600000);
    });

    it("should convert valid duration (hours > 24)", () => {
      const converted = convertDurationToMilliseconds("PT100H");

      assertConverted(converted, 360000000);
    });

    it("should convert valid duration (full - no decimal)", () => {
      const converted = convertDurationToMilliseconds("PT1H1M1S");

      assertConverted(converted, 3661000);
    });

    it("should convert valid duration (full - decimal)", () => {
      const converted = convertDurationToMilliseconds("PT1H1M1.999S");

      assertConverted(converted, 3661999);
    });

    it("should convert valid duration (invalid)", () => {
      assert.throws(() => convertDurationToMilliseconds("test"));
    });
  });
});
