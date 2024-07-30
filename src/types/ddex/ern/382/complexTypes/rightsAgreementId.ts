import { ProprietaryId } from "./proprietaryId";

// <xs:complexType name="RightsAgreementId">
//   <xs:sequence>
//     <xs:element name="MWLI" minOccurs="0" maxOccurs="unbounded" type="xs:string" />
//     <xs:element name="ProprietaryId" minOccurs="0" maxOccurs="unbounded" type="ern:ProprietaryId" />
//   </xs:sequence>
// </xs:complexType>
export type RightsAgreementId = {
  mwli?: string[];
  proprietaryId?: ProprietaryId[];
};
