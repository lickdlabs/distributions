import { Avs20161006 } from "../../../avs";
import { CurrentTerritoryCode } from "./currentTerritoryCode";
import { Period } from "./period";
import { UserInterfaceType } from "./userInterfaceType";
import { UseType } from "./useType";

// <xs:complexType name="ArtistDelegatedUsageRights">
//   <xs:sequence>
//     <xs:element name="UseType" maxOccurs="unbounded" type="ern:UseType" />
//     <xs:element name="UserInterfaceType" minOccurs="0" maxOccurs="unbounded" type="ern:UserInterfaceType" />
//     <xs:element name="PeriodOfRightsDelegation" type="ern:Period" />
//     <xs:element name="TerritoryOfRightsDelegation" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//     <xs:element name="MembershipType" type="avs:MembershipType" />
//   </xs:sequence>
// </xs:complexType>
export type ArtistDelegatedUsageRights = {
  useType: UseType[];
  userInterfaceType?: UserInterfaceType[];
  periodOfRightsDelegation: Period;
  territoryOfRightsDelegation: CurrentTerritoryCode[];
  membershipType: Avs20161006.MembershipType;
};
