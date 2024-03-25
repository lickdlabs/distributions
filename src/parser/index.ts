import { ILogger } from "@lickd/logger";
import * as xml2js from "xml2js";
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

    throw new Error("unknown/unsupported distribution");
  }

  private async parseToObject(body: string): Promise<any> {
    try {
      return JSON.parse(body);
    } catch {
      this.logger.debug("could not parse from json");
    }

    try {
      return await xml2js.parseStringPromise(
        body.replace(/ernm?\d*:/g, "ern:").replace(/:ernm?\d*/g, ":ern"),
      );
    } catch {
      this.logger.debug("could not parse from xml");
    }

    throw new Error("could not parse distribution to object");
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
