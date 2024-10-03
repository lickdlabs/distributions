import { Ern411 } from "../../../../../types";

export const parseDisplaySubTitle = (object: any): Ern411.DisplaySubTitle => ({
  _attributes: object.$
    ? {
        sequenceNumber: object.$.SequenceNumber
          ? parseInt(object.$.SequenceNumber)
          : undefined,
        isDisplayedInTitle: object.$.IsDisplayedInTitle
          ? object.$.IsDisplayedInTitle === "true"
          : undefined,
        subTitleType: object.$.SubTitleType || undefined,
      }
    : undefined,
  value: object.$ ? object._ : object,
});
