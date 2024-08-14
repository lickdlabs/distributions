import { Ern411 } from "../../../../../types";

export const parseIsCredited = (object: any): Ern411.IsCredited => ({
  _attributes: object.$
    ? {
        mayBeShared: object.$.MayBeShared
          ? object.$.MayBeShared === "true"
          : undefined,
      }
    : undefined,
  value: (object._ || object) === "true",
});
