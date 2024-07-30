import { Ern382 } from "../../../../../types";

export const parseIcpn = (object: any): Ern382.Icpn => {
  const attributes = {
    isEan: object.$?.IsEan ? object.$.IsEan === "true" : undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
