import { Ern411 } from "../../../../../types";

export const parseAspectRatio = (object: any): Ern411.AspectRatio => ({
  _attributes: object.$
    ? {
        aspectRatioType: object.$.AspectRatioType || undefined,
      }
    : undefined,
  value: parseFloat(object.$ ? object._ : object),
});
