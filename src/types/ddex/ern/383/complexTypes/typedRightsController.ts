import { Avs20200108 } from "../../../avs";
import { AllTerritoryCode } from "./allTerritoryCode";
import { PartyChoice } from "./partyChoice";
import { RightShareChoice } from "./rightShareChoice";

// <xs:complexType name="TypedRightsController">
//   <xs:sequence>
//     <xs:choice>
//       <xs:element name="PartyId" maxOccurs="unbounded" type="ern:PartyId" />
//       <xs:sequence>
//         <xs:element name="PartyName" maxOccurs="unbounded" type="ern:PartyName" />
//         <xs:element name="PartyId" minOccurs="0" maxOccurs="unbounded" type="ern:PartyId" />
//       </xs:sequence>
//     </xs:choice>
//     <xs:element name="RightsControllerRole" minOccurs="0" maxOccurs="unbounded" type="avs:RightsControllerRole" />
//     <xs:choice minOccurs="0">
//       <xs:element name="RightShareUnknown" type="xs:boolean" />
//       <xs:element name="RightSharePercentage" type="ern:Percentage" />
//     </xs:choice>
//     <xs:element name="RightsControllerType" minOccurs="0" type="avs:RightsControllerType" />
//     <xs:element name="TerritoryOfRegistration" minOccurs="0" type="ern:AllTerritoryCode" />
//     <xs:element name="StartDate" minOccurs="0" type="ern:ddex_IsoDate" />
//     <xs:element name="EndDate" minOccurs="0" type="ern:ddex_IsoDate" />
//   </xs:sequence>
//   <xs:attribute name="SequenceNumber" type="xs:integer" />
// </xs:complexType>
export type TypedRightsController = PartyChoice &
  Partial<RightShareChoice> & {
    _attributes?: {
      sequenceNumber?: number;
    };

    rightsControllerRole?: Avs20200108.RightsControllerRole[];
    rightsControllerType?: Avs20200108.RightsControllerType;
    territoryOfRegistration?: AllTerritoryCode;
    startDate?: Date;
    endDate?: Date;
  };
