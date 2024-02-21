import { EDistroType, TDistro } from "../../types";
import { EDistroDdexVersion } from "../../types/ddex";
import { v3 } from "./v3";
import { v4 } from "./v4";

export const ddex = (object: any): TDistro<EDistroType.DDEX> => {
  const type = EDistroType.DDEX;
  const version = detectVersion(object);
  const structure = detectStructure(version);

  console.log("parsing", type, version, structure);

  switch (structure) {
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

const detectVersion = (object: any): number => {
  const key = Object.keys(object)[0];
  const ern = object[key].$["xmlns:ern"] as string;
  const version = parseInt(ern.substring(ern.lastIndexOf("/") + 1));

  if (typeof version === "number") {
    return version;
  }

  throw new Error("unsupported/unknown version: " + version);
};

const detectStructure = (version: number): EDistroDdexVersion => {
  if (version.toString().startsWith("3")) {
    return EDistroDdexVersion.V3;
  }

  if (version.toString().startsWith("4")) {
    return EDistroDdexVersion.V4;
  }

  throw new Error("unsupported/unknown structure: " + version);
};
