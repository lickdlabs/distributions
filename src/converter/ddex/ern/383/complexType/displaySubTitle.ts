import { Ern383, Ern411 } from "../../../../../types";

export const convertDisplaySubTitle = (
  subTitle: Ern383.SubTitle,
): Ern411.DisplaySubTitle => ({
  _attributes: undefined,
  value: subTitle.value,
});
