import { AllTerritoryCode } from "./allTerritoryCode";
import { EventDate } from "./eventDate";

// <xs:complexType name="Performance">
//   <xs:sequence>
//     <xs:element name="Territory" minOccurs="0" type="ern:AllTerritoryCode" />
//     <xs:element name="Date" minOccurs="0" type="ern:EventDate" />
//   </xs:sequence>
// </xs:complexType>
export type Performance = {
  territory?: AllTerritoryCode;
  date?: EventDate;
};
