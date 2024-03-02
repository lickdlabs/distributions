import { ConsoleLogger } from "@lickd/logger";
import { assert } from "chai";
import { createStubInstance } from "sinon";
import { Converter } from "../src/converter";

const logger = createStubInstance(ConsoleLogger);

describe("Converter", () => {
  describe("constructor()", () => {
    it("should build a default converter", () => {
      const converter = new Converter(logger);
      assert.instanceOf(converter, Converter);
      assert.isFunction(converter.convertToDdex);
    });
  });
});
