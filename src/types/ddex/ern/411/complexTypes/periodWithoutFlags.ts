import { EventDateWithoutFlags } from "./eventDateWithoutFlags";

// <xs:complexType name="PeriodWithoutFlags">
//   <xs:choice>
//     <xs:sequence>
//       <xs:element name="StartDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
//       <xs:element name="EndDate" minOccurs="0" type="ern:EventDateWithoutFlags" />
//     </xs:sequence>
//     <xs:sequence>
//       <xs:element name="StartDateTime" minOccurs="0" type="ern:EventDateTimeWithoutFlags" />
//       <xs:element name="EndDateTime" minOccurs="0" type="ern:EventDateTimeWithoutFlags" />
//     </xs:sequence>
//   </xs:choice>
// </xs:complexType>
export type PeriodWithoutFlags = {
  startDate?: EventDateWithoutFlags;
  endDate?: EventDateWithoutFlags;
};
