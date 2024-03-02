import { assert } from "chai";
import { Distributions } from "../src";

describe("Distributions", () => {
  describe("constructor()", () => {
    it("should build a default client", () => {
      const distributions = new Distributions();
      assert.instanceOf(distributions, Distributions);
      assert.isFunction(distributions.parse);
      assert.isFunction(distributions.convertToDdex);
    });
  });
});
