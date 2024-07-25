import { Avs411 } from "../../../avs";
import { LocalPartyAnchorReference } from "./localPartyAnchorReference";

// <xs:complexType name="ReleaseLabelReference">
//   <xs:simpleContent>
//     <xs:extension base="ern:ddex_LocalPartyAnchorReference">
//       <xs:attribute name="LanguageAndScriptCode" type="xs:string" />
//       <xs:attribute name="IsDefault" type="xs:boolean" />
//       <xs:attribute name="LabelType" type="avs:LabelType" />
//       <xs:attribute name="Namespace" type="xs:string" />
//       <xs:attribute name="UserDefinedValue" type="xs:string" />
//       <xs:attribute name="ApplicableTerritoryCode" type="avs:CurrentTerritoryCode" />
//     </xs:extension>
//   </xs:simpleContent>
// </xs:complexType>
export type ReleaseLabelReference = {
  _attributes?: {
    languageAndScriptCode?: string;
    isDefault?: boolean;
    labelType?: Avs411.LabelType;
    namespace?: string;
    userDefinedValue?: string;
    applicableTerritoryCode?: Avs411.CurrentTerritoryCode;
  };

  value: LocalPartyAnchorReference;
};
