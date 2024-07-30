import { EventDate } from "./eventDate";

// <xs:complexType name="Period">
//   <xs:choice>
//     <xs:sequence>
//       <xs:element name="StartDate" minOccurs="0" type="ern:EventDate" />
//       <xs:element name="EndDate" minOccurs="0" type="ern:EventDate" />
//     </xs:sequence>
//     <xs:sequence>
//       <xs:element name="StartDateTime" minOccurs="0" type="ern:EventDateTime" />
//       <xs:element name="EndDateTime" minOccurs="0" type="ern:EventDateTime" />
//     </xs:sequence>
//   </xs:choice>
// </xs:complexType>
export type Period = {
  startDate?: EventDate;
  endDate?: EventDate;
};
