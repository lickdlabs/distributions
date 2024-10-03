import { ILogger } from "@lickd/logger";
import * as xml2js from "xml2js";
import { ParserError } from "../errors";
import { Ern } from "../types";
import { ErnParser } from "./ddex";

export class Parser {
  public constructor(private logger: ILogger) {}

  public async parse(body: string): Promise<Ern> {
    const object = await this.parseToObject(body);

    if (this.isErn(object)) {
      return object;
    }

    if (this.isDdex(object)) {
      return new ErnParser(this.logger).parse(object);
    }

    throw new ParserError({
      message: "unknown/unsupported distribution",
    });
  }

  private async parseToObject(body: string): Promise<any> {
    try {
      this.logger.info("parsing distribution as json to object");

      const result = JSON.parse(body);

      this.logger.info("successfully parsed distribution as json to object");

      return result;
    } catch {
      this.logger.info("failed parsing distribution as json to object");
    }

    try {
      this.logger.info("parsing distribution as xml to object");

      const result = await xml2js.parseStringPromise(
        body.replace(/ernm?\d*:/g, "ern:").replace(/:ernm?\d*/g, ":ern"),
        {
          preserveChildrenOrder: true,
          trim: true,
        },
      );

      if (!result) {
        throw new Error();
      }

      this.logger.info("successfully parsed distribution as xml to object");

      return result;
    } catch {
      this.logger.info("failed parsing distribution as xml to object");
    }

    throw new ParserError({
      message: "failed parsing distribution to object",
    });
  }

  private isErn(object: any): object is Ern {
    return "version" in object && "action" in object && "element" in object;
  }

  private isDdex(object: any): boolean {
    try {
      const key = Object.keys(object)[0];
      const ern = object[key].$["xmlns:ern"];

      return typeof ern === "string" && ern.startsWith("http://ddex.net");
    } catch {
      return false;
    }
  }
}
