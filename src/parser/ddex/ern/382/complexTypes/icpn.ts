import { Ern382 } from "../../../../../types";

export const parseIcpn = (object: any): Ern382.Icpn => ({
  _attributes: object.$
    ? {
        isEan: object.$.IsEan ? object.$.IsEan === "true" : undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
