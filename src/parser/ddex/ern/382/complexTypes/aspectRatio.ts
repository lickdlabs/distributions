import { Ern382 } from "../../../../../types";

export const parseAspectRatio = (object: any): Ern382.AspectRatio => ({
  _attributes: object.$
    ? {
        aspectRatioType: object.$.AspectRatioType || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
