import { readFileSync } from "fs";
import { parse } from "../src";
import { assert382, assert383, assert411 } from "./assertions";

describe("Parser", () => {
  describe("parse ddex new message", () => {
    it("should parse 382", async () => {
      const parsed = await parse(
        readFileSync("./examples/_ddex/382.xml").toString(),
      );

      assert382(parsed);
    });

    it("should parse 383", async () => {
      const parsed = await parse(
        readFileSync("./examples/_ddex/383.xml").toString(),
      );

      assert383(parsed);
    });

    it("should parse 411", async () => {
      const parsed = await parse(
        readFileSync("./examples/_ddex/411.xml").toString(),
      );

      assert411(parsed);
    });
  });
});
