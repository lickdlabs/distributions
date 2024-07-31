import { Ern383 } from "../../../../../types";

export const parseContactId = (object: any): Ern383.ContactId => ({
  emailAddress: object.EmailAddress
    ? object.EmailAddress.map((emailAddress: string) => emailAddress)
    : undefined,
  phoneNumber: object.PhoneNumber
    ? object.PhoneNumber.map((phoneNumber: string) => phoneNumber)
    : undefined,
  faxNumber: object.FaxNumber
    ? object.FaxNumber.map((faxNumber: string) => faxNumber)
    : undefined,
});
