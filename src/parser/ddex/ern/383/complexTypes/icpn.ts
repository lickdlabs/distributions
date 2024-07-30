import { Ern383 } from "../../../../../types";

export const parseIcpn = (object: any): Ern383.Icpn => {
  const attributes = {
    isEan: object.$?.IsEan ? object.$.IsEan === "true" : undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
