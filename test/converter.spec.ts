import { assert } from "chai";
import { readFileSync } from "fs";
import { ConverterError, Distributions, ErnVersions } from "../src";
import { findUnique } from "../src/converter/ddex/ern/utils";
import { assert382, assert383, assert411 } from "./assertions";

const distributions = new Distributions();

describe("Converter", () => {
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

describe("Utils", () => {
  describe("findUnique()", () => {
    it("should return all records if all unique (simple)", () => {
      const array = [1, 2, 3, 4, 5];
      const unique = findUnique(array);

      assert.isArray(unique);
      assert.strictEqual(unique.length, array.length);
    });

    it("should return all records if all unique (advanced)", () => {
      const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
      const unique = findUnique(array);

      assert.isArray(unique);
      assert.strictEqual(unique.length, array.length);
    });

    it("should return only unique records (simple)", () => {
      const array = [1, 1, 1, 1, 1];
      const unique = findUnique(array);

      assert.isArray(unique);
      assert.strictEqual(unique.length, 1);
    });

    it("should return only unique records (advanced)", () => {
      const array = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
      const unique = findUnique(array);

      assert.isArray(unique);
      assert.strictEqual(unique.length, 1);
    });
  });
});
