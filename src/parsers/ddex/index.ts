import { EDistroType, TDistro } from "../../types";
import { EDistroDdexVersion } from "../../types/ddex";
import { v3 } from "./v3";
import { v4 } from "./v4";

export const ddex = (object: any): TDistro<EDistroType.DDEX> => {
  const type = EDistroType.DDEX;
  const version = detectVersion(object);

  console.log("parsing", type, version);

  switch (version) {
    case EDistroDdexVersion.V3:
      return {
        type,
        version,
        ...v3(object),
      };

    case EDistroDdexVersion.V4:
      return {
        type,
        version,
        ...v4(object),
      };
  }
};

const detectVersion = (object: any): EDistroDdexVersion => {
  const key = Object.keys(object)[0];
  const ern = object[key].$["xmlns:ern"] as string;

  if (ern.startsWith("http://ddex.net/xml/ern/3")) {
    return EDistroDdexVersion.V3;
  }

  if (ern.startsWith("http://ddex.net/xml/ern/4")) {
    return EDistroDdexVersion.V4;
  }

  throw new Error("unsupported/unknown version: " + ern);
};
