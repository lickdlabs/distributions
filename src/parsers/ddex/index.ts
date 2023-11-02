import { EVersion } from "../../types/ddex";
import { EType, TDistribution } from "../../types";
import { v3 } from "./v3";
import { v4 } from "./v4";

export const ddex = (object: any): TDistribution<EType.DDEX> => {
  const type = EType.DDEX;
  const version = detectVersion(object);

  console.log("parsing", type, version);

  switch (version) {
    case EVersion.V3:
      return {
        type,
        version,
        ...v3(object),
      };

    case EVersion.V4:
      return {
        type,
        version,
        ...v4(object),
      };
  }
};

const detectVersion = (object: any): EVersion => {
  try {
    const key = Object.keys(object)[0];
    const ern = object[key].$["xmlns:ern"] as string;

    if (ern.startsWith("http://ddex.net/xml/ern/3")) {
      return EVersion.V3;
    }

    if (ern.startsWith("http://ddex.net/xml/ern/4")) {
      return EVersion.V4;
    }

    throw new Error("unsupported version");
  } catch {
    throw new Error("could not detect version");
  }
};
