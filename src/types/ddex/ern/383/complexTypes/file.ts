import { HashSum } from "./hashSum";

// <xs:complexType name="File">
//   <xs:sequence>
//    <xs:choice>
//       <xs:sequence>
//         <xs:element name="FileName" type="xs:string" />
//         <xs:element name="FilePath" minOccurs="0" type="xs:string" />
//       </xs:sequence>
//       <xs:element name="URL" type="xs:string" />
//    </xs:choice>
//    <xs:element name="HashSum" minOccurs="0" type="ern:HashSum" />
//   </xs:sequence>
// </xs:complexType>
export type File = FileChoice & {
  hashSum?: HashSum;
};

type FileChoice =
  | { fileName: string; filePath?: string; url?: never }
  | { fileName?: never; filePath?: never; url: string };
