import { Ern382 } from "../../../../../types";

export const parsePartyId = (object: any): Ern382.PartyId => {
  const attributes = {
    namespace: object.$?.Namespace || undefined,
    isDpid: object.$?.IsDPID ? !!object.$.IsDPID : undefined,
    isIsni: object.$?.IsISNI ? !!object.$.IsISNI : undefined,
  };

  return {
    _attributes: object.$ ? attributes : undefined,
    value: object._ || object,
  };
};
