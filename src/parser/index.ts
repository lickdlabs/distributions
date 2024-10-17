import * as xml2js from "xml2js";
import { ParserError } from "../errors";
import { Logger } from "../logger";
import { Erns } from "../types";
import { parseErn } from "./ddex";

export const parse = async (body: string): Promise<Erns> => {
  const object = await parseToObject(body);

  if (isErn(object)) {
    return object;
  }

  if (isDdex(object)) {
    return parseErn(object);
  }

  throw new ParserError({
    message: "unknown/unsupported distribution",
  });
};

const parseToObject = async (body: string): Promise<any> => {
  try {
    Logger.info("parsing distribution as json to object");

    const result = JSON.parse(body);

    Logger.info("successfully parsed distribution as json to object");

    return result;
  } catch {
    Logger.info("failed parsing distribution as json to object");
  }

  try {
    Logger.info("parsing distribution as xml to object");

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

    Logger.info("successfully parsed distribution as xml to object");

    return result;
  } catch {
    Logger.info("failed parsing distribution as xml to object");
  }

  throw new ParserError({
    message: "failed parsing distribution to object",
  });
};

const isErn = (object: any): object is Erns =>
  "version" in object && "action" in object && "element" in object;

const isDdex = (object: any): boolean => {
  try {
    const key = Object.keys(object)[0];
    const ern = object[key].$["xmlns:ern"];

    return typeof ern === "string" && ern.startsWith("http://ddex.net");
  } catch {
    return false;
  }
};
