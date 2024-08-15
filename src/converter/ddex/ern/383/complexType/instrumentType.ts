import { Avs411, Ern411 } from "../../../../../types";

export const convertInstrumentType = (
  instrumentType: string,
): Ern411.InstrumentType => ({
  _attributes: undefined,
  value: instrumentType as unknown as Avs411.InstrumentType,
});
