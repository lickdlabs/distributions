import { ConsoleLogger } from "@lickd/logger";
import { assert } from "chai";
import { createStubInstance } from "sinon";
import { Parser } from "../src";

const logger = createStubInstance(ConsoleLogger);

describe("Parser", () => {
  describe("constructor()", () => {
    it("should build a default parser", () => {
      const parser = new Parser(logger);
      assert.instanceOf(parser, Parser);
      assert.isFunction(parser.parse);
    });
  });
});
