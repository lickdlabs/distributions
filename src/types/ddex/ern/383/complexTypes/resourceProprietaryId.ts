import { ProprietaryId } from "./proprietaryId";

// <xs:complexType name="ResourceProprietaryId">
//   <xs:sequence>
//     <xs:element name="ProprietaryId" maxOccurs="unbounded" type="ern:ProprietaryId" />
//   </xs:sequence>
//   <xs:attribute name="IsReplaced" type="xs:boolean" />
// </xs:complexType>
export type ResourceProprietaryId = {
  _attributes?: {
    isReplaced?: boolean;
  };

  proprietaryId: ProprietaryId[];
};
