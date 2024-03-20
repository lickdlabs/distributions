import { Ern383 } from "../../../../../types";

export const parsePartyId = (object: any): Ern383.PartyId => {
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
