import { Ern382 } from "../../../../../types";
import { parseRelease } from "./release";

export const parseReleaseList = (object: any): Ern382.ReleaseList => {
  const attributes = {
    languageAndScriptCode: object.$?.LanguageAndScriptCode || undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    release: object.Release
      ? object.Release.map((release: any) => parseRelease(release))
      : undefined,
  };
};
