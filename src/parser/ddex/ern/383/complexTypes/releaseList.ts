import { Ern383 } from "../../../../../types";
import { parseRelease } from "./release";

export const parseReleaseList = (object: any): Ern383.ReleaseList => {
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
