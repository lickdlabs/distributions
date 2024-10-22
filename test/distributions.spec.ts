import { assert } from "chai";
import { Distributions } from "../src";

const distributions = new Distributions();

describe("Distributions", () => {
  describe("constructor()", () => {
    it("should build a default distributions client", () => {
      assert.instanceOf(distributions, Distributions);
      assert.isFunction(distributions.parse);
    });
  });
});
