// <xs:choice>
//   <xs:element name="NoDisplaySequence" type="xs:boolean" />
//   <xs:element name="DisplaySequence" type="xs:string" />
// </xs:choice>
export type DisplaySequenceChoice =
  | { noDisplaySequence: boolean; displaySequence?: never }
  | { noDisplaySequence?: never; displaySequence: string };
