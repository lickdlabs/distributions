import { Avs20200108 } from "../../../avs";
import { PartyDescriptor } from "./partyDescriptor";

// <xs:complexType name="Membership">
//   <xs:sequence>
//     <xs:element name="Organization" type="ern:PartyDescriptor" />
//     <xs:element name="MembershipType" type="avs:MembershipType" />
//     <xs:element name="StartDate" minOccurs="0" type="ern:ddex_IsoDate" />
//     <xs:element name="EndDate" minOccurs="0" type="ern:ddex_IsoDate" />
//   </xs:sequence>
// </xs:complexType>
export type Membership = {
  organization: PartyDescriptor;
  membershipType: Avs20200108.MembershipType;
  startDate?: Date;
  endDate?: Date;
};
