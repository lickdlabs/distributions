import { Ern383 } from "../../../../../types";
import { parseRelease } from "./release";

export const parseReleaseList = (object: any): Ern383.ReleaseList => ({
  _attributes: object.$
    ? {
        languageAndScriptCode: object.$.LanguageAndScriptCode || undefined,
      }
    : undefined,
  release: object.Release
    ? object.Release.map((release: any) => parseRelease(release))
    : undefined,
});
