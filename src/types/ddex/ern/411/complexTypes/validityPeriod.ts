import { EventDate } from "./eventDate";

// <xs:complexType name="ValidityPeriod">
//   <xs:sequence>
//     <xs:element name="StartDate" minOccurs="0" type="ern:EventDate" />
//     <xs:element name="EndDate" minOccurs="0" type="ern:EventDate" />
//   </xs:sequence>
// </xs:complexType>
export type ValidityPeriod = {
  startDate?: EventDate;
  endDate?: EventDate;
};
