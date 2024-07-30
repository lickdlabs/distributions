import { PartyChoice } from "./partyChoice";

// <xs:complexType name="Artist">
//   <xs:sequence>
//     <xs:choice>
//       <xs:element name="PartyId" maxOccurs="unbounded" type="ern:PartyId" />
//       <xs:sequence>
//         <xs:element name="PartyName" maxOccurs="unbounded" type="ern:PartyName" />
//         <xs:element name="PartyId" minOccurs="0" maxOccurs="unbounded" type="ern:PartyId" />
//       </xs:sequence>
//     </xs:choice>
//     <xs:element name="ArtistRole" maxOccurs="unbounded" type="ern:ArtistRole" />
//     <xs:element name="Nationality" minOccurs="0" maxOccurs="unbounded" type="ern:ddexC_CurrentTerritoryCode" />
//   </xs:sequence>
//   <xs:attribute name="SequenceNumber" type="xs:integer" />
// </xs:complexType>
export type Artist = PartyChoice & {
  _attributes?: {
    sequenceNumber?: number;
  };

  // @todo <xs:element name="ArtistRole" maxOccurs="unbounded" type="ern:ArtistRole" />
  // @todo <xs:element name="Nationality" minOccurs="0" maxOccurs="unbounded" type="ern:ddexC_CurrentTerritoryCode" />
};
