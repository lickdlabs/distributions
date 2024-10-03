import { Ern383 } from "../../../../../types";

export const parseIcpn = (object: any): Ern383.Icpn => ({
  _attributes: object.$
    ? {
        isEan: object.$.IsEan ? object.$.IsEan === "true" : undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
