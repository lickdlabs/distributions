import { ILogger } from "@lickd/logger";
import * as xml2js from "xml2js";
import { EDistroType, TDistro } from "./types";
import { IParser } from "./interfaces/parser";
import { Ddex } from "./parsers";

export class Parser implements IParser {
  public constructor(private logger: ILogger) {}

  public async parse(body: string): Promise<TDistro<EDistroType>> {
    const object = await this.parseToObject(body);
    const type = this.detectType(object);

    this.logger.info("parsing distribution", { type });

    switch (type) {
      case EDistroType.DDEX:
        return new Ddex(this.logger).parse(object);
    }
  }

  private async parseToObject(body: string): Promise<any> {
    try {
      return await xml2js.parseStringPromise(
        body.replace(/ernm?\d*:/g, "ern:").replace(/:ernm?\d*/g, ":ern"),
      );
    } catch {
      throw new Error("could not parse distribution to object");
    }
  }

  private detectType(object: any): EDistroType {
    if (this.isDdex(object)) {
      return EDistroType.DDEX;
    }

    throw new Error("could not detect distribution type");
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
