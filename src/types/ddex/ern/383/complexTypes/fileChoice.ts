import { Description } from "./description";
import { File } from "./file";

// <xs:choice>
//   <xs:element name="FileAvailabilityDescription" maxOccurs="unbounded" type="ern:Description" />
//   <xs:element name="File" maxOccurs="unbounded" type="ern:File" />
// </xs:choice>
export type FileChoice =
  | { fileAvailabilityDescription: Description[]; file?: never }
  | { file: File[]; fileAvailabilityDescription?: never };
