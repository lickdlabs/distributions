// <xs:choice>
//   <xs:element name="RightShareUnknown" type="xs:boolean" />
//   <xs:element name="RightSharePercentage" type="ern:Percentage" />
// </xs:choice>
export type RightShareChoice =
  | { rightShareUnknown: boolean; rightSharePercentage?: never }
  | { rightShareUnknown?: never; rightSharePercentage?: number };
