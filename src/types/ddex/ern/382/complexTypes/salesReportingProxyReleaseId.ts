import { Reason } from "./reason";
import { ReasonType } from "./reasonType";
import { ReleaseId } from "./releaseId";

// <xs:complexType name="SalesReportingProxyReleaseId">
//   <xs:sequence>
//     <xs:element name="ReleaseId" type="ern:ReleaseId" />
//     <xs:element name="Reason" minOccurs="0" type="ern:Reason" />
//     <xs:element name="ReasonType" type="ern:ReasonType" />
//   </xs:sequence>
// </xs:complexType>
export type SalesReportingProxyReleaseId = {
  releaseId: ReleaseId;
  reason?: Reason;
  reasonType: ReasonType;
};
