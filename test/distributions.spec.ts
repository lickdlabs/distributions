import { assert } from "chai";
import { Distributions } from "../src";

describe("Distributions", () => {
  describe("constructor()", () => {
    it("should build a default distributions client", () => {
      const distributions = new Distributions();

      assert.instanceOf(distributions, Distributions);
      assert.isFunction(distributions.parse);
    });
  });
});
