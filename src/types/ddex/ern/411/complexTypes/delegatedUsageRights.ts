import { CurrentTerritoryCode } from "./currentTerritoryCode";
import { Period } from "./period";
import { UseType } from "./useType";

// <xs:complexType name="DelegatedUsageRights">
//   <xs:sequence>
//     <xs:element name="UseType" maxOccurs="unbounded" type="ern:UseType" />
//     <xs:element name="PeriodOfRightsDelegation" minOccurs="0" type="ern:Period" />
//     <xs:element name="TerritoryOfRightsDelegation" minOccurs="0" maxOccurs="unbounded" type="ern:CurrentTerritoryCode" />
//   </xs:sequence>
// </xs:complexType>
export type DelegatedUsageRights = {
  useType: UseType[];
  periodOfRightsDelegation?: Period;
  territoryOfRightsDelegation?: CurrentTerritoryCode[];
};
