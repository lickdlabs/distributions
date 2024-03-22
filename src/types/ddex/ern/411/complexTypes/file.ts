import { DetailedHashSum } from "./detailedHashSum";

// <xs:complexType name="File">
//   <xs:sequence>
//    <xs:element name="URI" type="xs:string" />
//    <xs:element name="HashSum" minOccurs="0" type="ern:DetailedHashSum" />
//    <xs:element name="FileSize" minOccurs="0" type="xs:decimal" />
//   </xs:sequence>
// </xs:complexType>
export type File = {
  uri: string;
  hashSum?: DetailedHashSum;
  fileSize?: number;
};
