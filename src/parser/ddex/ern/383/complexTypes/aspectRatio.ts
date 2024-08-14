import { Ern383 } from "../../../../../types";

export const parseAspectRatio = (object: any): Ern383.AspectRatio => ({
  _attributes: object.$
    ? {
        aspectRatioType: object.$.AspectRatioType || undefined,
      }
    : undefined,
  value: object._ || object,
});
