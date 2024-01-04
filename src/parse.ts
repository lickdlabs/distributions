import * as xml2js from "xml2js";
import * as parsers from "./parsers";
import { EDistroType, TDistro } from "./types";

export const parse = async (body: string): Promise<TDistro<EDistroType>> => {
  const object = await convertToObject(body);

  switch (detectType(object)) {
    case EDistroType.DDEX:
      return parsers.ddex(object);
  }
};

const convertToObject = async (body: string): Promise<any> => {
  try {
    return await xml2js.parseStringPromise(
      body.replace(/ernm?:/g, "ern:").replace(/:ernm?/g, ":ern"),
    );
  } catch {
    throw new Error("could not convert distribution to object");
  }
};

const detectType = (object: any): EDistroType => {
  if (isDdex(object)) {
    return EDistroType.DDEX;
  }

  throw new Error("could not detect distribution type");
};

const isDdex = (object: any): boolean => {
  try {
    const key = Object.keys(object)[0];
    const ern = object[key].$["xmlns:ern"];

    return typeof ern === "string" && ern.startsWith("http://ddex.net");
  } catch {
    return false;
  }
};
