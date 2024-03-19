import * as v4 from "../message";

export type TNewReleaseMessage = v4.TNewReleaseMessage & {
  // <xs:element name='MessageHeader' type='ern:MessageHeader'></xs:element>
  messageHeader: TMessageHeader;

  // <xs:element name='PartyList' type='ern:PartyList'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='CueSheetList' type='ern:DetailedCueSheetList'></xs:element>
  // @todo not implemented yet

  // <xs:element name='ResourceList' type='ern:ResourceList'></xs:element>
  resourceList: TResourceList;

  // <xs:element minOccurs='0' name='ChapterList' type='ern:ChapterList'></xs:element>
  // @todo not implemented yet

  // <xs:element name='ReleaseList' type='ern:ReleaseList'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='DealList' type='ern:DealList'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='SupplementalDocumentList' type='ern:SupplementalDocumentList'></xs:element>
  // @todo not implemented yet
};

export type TMessageHeader = {
  // <xs:element minOccurs='0' name='MessageThreadId' type='xs:string'></xs:element>
  // @todo not implemented yet

  // <xs:element name='MessageId' type='xs:string'></xs:element>
  messageId: string;

  // <xs:element minOccurs='0' name='MessageFileName' type='xs:string'></xs:element>
  // @todo not implemented yet

  // <xs:element name='MessageSender' type='ern:MessagingPartyWithoutCode'></xs:element>
  messageSender: TMessagingPartyWithoutCode;

  // <xs:element minOccurs='0' name='SentOnBehalfOf' type='ern:MessagingPartyWithoutCode'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' name='MessageRecipient' type='ern:MessagingPartyWithoutCode'></xs:element>
  messageRecipient: TMessagingPartyWithoutCode;

  // <xs:element name='MessageCreatedDateTime' type='xs:dateTime'></xs:element>
  messageCreatedDateTime: Date;

  // <xs:element minOccurs='0' name='MessageAuditTrail' type='ern:MessageAuditTrail'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='MessageControlType' type='avs:MessageControlType'></xs:element>
  // @todo not implemented yet
};

export type TMessagingPartyWithoutCode = {
  // <xs:element name='PartyId'>
  //   <xs:simpleType>
  //     <xs:restriction base='xs:string'>
  //       <xs:pattern value='PADPIDA[a-zA-Z0-9]+' />
  //     </xs:restriction>
  //   </xs:simpleType>
  // </xs:element>
  partyId: `${string & { __brand: "^PADPIDA[a-zA-Z0-9]+$" }}`;

  // <xs:element minOccurs='0' name='PartyName' type='ern:PartyNameWithoutCode'></xs:element>
  partyName?: TPartyNameWithoutCode;

  // <xs:element minOccurs='0' name='TradingName' type='xs:string'></xs:element>
  // @todo not implemented yet
};

export type TPartyNameWithoutCode = {
  // <xs:element name='FullName' type='xs:string'></xs:element>
  fullName: string;

  // <xs:element minOccurs='0' name='FullNameAsciiTranscribed' type='xs:string'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='FullNameIndexed' type='xs:string'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='NamesBeforeKeyName' type='xs:string'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='KeyName' type='xs:string'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='NamesAfterKeyName' type='xs:string'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='AbbreviatedName' type='xs:string'></xs:element>
  // @todo not implemented yet
};

export type TResourceList = {
  // <xs:element maxOccurs='unbounded' minOccurs='0' name='SoundRecording' type='ern:SoundRecording'></xs:element>
  soundRecording?: TSoundRecording[];

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Video' type='ern:Video'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Image' type='ern:Image'></xs:element>
  image?: TImage[];

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Text' type='ern:Text'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='SheetMusic' type='ern:SheetMusic'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Software' type='ern:Software'></xs:element>
  // @todo not implemented yet
};

export type TSoundRecording = {
  // <xs:element name='ResourceReference'>
  //     <xs:simpleType>
  //         <xs:restriction base='xs:ID'>
  //             <xs:pattern value='A[\d\-_a-zA-Z]+' />
  //         </xs:restriction>
  //     </xs:simpleType>
  // </xs:element>
  resourceReference: `${string & {
    __brand: "^A[\\d\\-_a-zA-Z]+$";
  }}`;

  // <xs:element name='Type' type='ern:SoundRecordingType'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' name='ResourceId' type='ern:SoundRecordingId'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='WorkId' type='ern:MusicalWorkId'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' name='DisplayTitleText' type='ern:DisplayTitleText'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' name='DisplayTitle' type='ern:DisplayTitle'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='AdditionalTitle' type='ern:AdditionalTitle'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' name='DisplayArtistName' type='ern:DisplayArtistNameWithDefault'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' name='DisplayArtist' type='ern:DisplayArtist'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Contributor' type='ern:Contributor'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Character' type='ern:Character'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='ResourceRightsController' type='ern:ResourceRightsController'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='WorkRightsController' type='ern:WorkRightsController'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='PLine' type='ern:PLineWithDefault'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='CourtesyLine' type='ern:CourtesyLineWithDefault'></xs:element>
  // @todo not implemented yet

  // <xs:element name='Duration' type='xs:duration'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='CreationDate' type='ern:EventDateWithoutTerritory'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='MasteredDate' type='ern:EventDateWithoutTerritory'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='RemasteredDate' type='ern:EventDateWithoutTerritory'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='FirstPublicationDate' type='ern:FirstPublicationDate'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' name='ParentalWarningType' type='ern:ParentalWarningTypeWithTerritory'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='RelatedRelease' type='ern:RelatedReleaseWithReference'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='RelatedResource' type='ern:RelatedResource'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='CompositeMusicalWorkType' type='avs:CompositeMusicalWorkType'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsInstrumental' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ContainsHiddenContent' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsRemastered' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsHiResMusic' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='InstrumentationDescription' type='ern:InstrumentationDescription'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='LanguageOfPerformance' type='avs:IsoLanguageCode'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='TechnicalDetails' type='ern:TechnicalSoundRecordingDetails'></xs:element>
  technicalDetails?: TTechnicalSoundRecordingDetails[];

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Raga' type='ern:Raga'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Tala' type='ern:Tala'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Deity' type='ern:Deity'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='AudioChapterReference'>
  //     <xs:simpleType>
  //         <xs:restriction base='xs:IDREF'>
  //             <xs:pattern value='X[\d\-_a-zA-Z]+' />
  //         </xs:restriction>
  //     </xs:simpleType>
  // </xs:element>
  // @todo not implemented yet
};

export type TImage = {
  // <xs:element name='ResourceReference'>
  //     <xs:simpleType>
  //         <xs:restriction base='xs:ID'>
  //             <xs:pattern value='A[\d\-_a-zA-Z]+' />
  //         </xs:restriction>
  //     </xs:simpleType>
  // </xs:element>
  resourceReference: `${string & {
    __brand: "^A[\\d\\-_a-zA-Z]+$";
  }}`;

  // <xs:element name='Type' type='ern:ImageType'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' name='ResourceId' type='ern:ResourceProprietaryId'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='DisplayTitleText' type='ern:DisplayTitleText'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='DisplayTitle' type='ern:DisplayTitle'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='AdditionalTitle' type='ern:AdditionalTitle'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='DisplayArtistName' type='ern:DisplayArtistNameWithDefault'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='DisplayArtist' type='ern:DisplayArtist'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Contributor' type='ern:Contributor'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='ResourceRightsController' type='ern:ResourceRightsController'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='WorkRightsController' type='ern:WorkRightsController'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='CLine' type='ern:CLineWithDefault'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='CourtesyLine' type='ern:CourtesyLineWithDefault'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='CreationDate' type='ern:EventDateWithoutTerritory'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='FirstPublicationDate' type='ern:FulfillmentDateWithTerritory'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='ParentalWarningType' type='ern:ParentalWarningTypeWithTerritory'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='RelatedRelease' type='ern:RelatedReleaseWithReference'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='RelatedResource' type='ern:RelatedResource'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ContainsHiddenContent' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Description' type='ern:DescriptionWithTerritory'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Keywords' type='ern:KeywordsWithTerritory'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Synopsis' type='ern:SynopsisWithTerritory'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='TechnicalDetails' type='ern:TechnicalImageDetails'></xs:element>
  technicalDetails?: TTechnicalImageDetails[];
};

export type TTechnicalSoundRecordingDetails = {
  // <xs:element name='TechnicalResourceDetailsReference'>
  //     <xs:simpleType>
  //         <xs:restriction base='xs:ID'>
  //             <xs:pattern value='T[\d\-_a-zA-Z]+' />
  //         </xs:restriction>
  //     </xs:simpleType>
  // </xs:element>
  technicalResourceDetailsReference: `${string & {
    __brand: "^T[\\d\\-_a-zA-Z]+$";
  }}`;

  // <xs:element minOccurs='0' name='AudioCodecType' type='ern:AudioCodecType'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='BitRate' type='ern:BitRate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='OriginalBitRate' type='ern:BitRate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='NumberOfChannels' type='xs:integer'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='SamplingRate' type='ern:SamplingRate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='OriginalSamplingRate' type='ern:SamplingRate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='BitsPerSample' type='xs:integer'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='Duration' type='xs:duration'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='BitDepth' type='xs:integer'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsPreview' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='PreviewDetails' type='ern:SoundRecordingPreviewDetails'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='File' type='ern:File'></xs:element>
  file?: TFile;

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Fingerprint' type='ern:Fingerprint'></xs:element>
  // @todo not implemented yet
};

export type TTechnicalImageDetails = {
  // <xs:element minOccurs='0' name='ImageCodecType' type='ern:ImageCodecType'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ImageHeight' type='ern:Extent'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ImageWidth' type='ern:Extent'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='AspectRatio' type='ern:AspectRatio'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ColorDepth' type='xs:integer'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ImageResolution' type='xs:integer'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='BitDepth' type='xs:integer'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsPreview' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='PreviewDetails' type='ern:PreviewDetails'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='File' type='ern:File'></xs:element>
  file?: TFile;

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Fingerprint' type='ern:Fingerprint'></xs:element>
  // @todo not implemented yet
};

export type TFile = {
  // <xs:element name='URI' type='xs:string'></xs:element>
  uri: string;

  // <xs:element minOccurs='0' name='HashSum' type='ern:DetailedHashSum'></xs:element>
  hashSum?: TDetailedHashSum;

  // <xs:element minOccurs='0' name='FileSize' type='xs:decimal'></xs:element>
  fileSize?: number;
};

export type TDetailedHashSum = {
  // <xs:element name='Algorithm' type='ern:HashSumAlgorithmType'></xs:element>
  algorithm: EHashSumAlgorithmType;

  // <xs:element minOccurs='0' name='Version' type='xs:string'></xs:element>
  version?: string;

  // <xs:element minOccurs='0' name='Parameter' type='xs:string'></xs:element>
  parameter?: string;

  // <xs:element minOccurs='0' name='DataType' type='avs:BinaryDataType'></xs:element>
  dataType?: EBinaryDataType;

  // <xs:element name='HashSum' type='xs:string'></xs:element>
  hashSum: string;
};

export enum EHashSumAlgorithmType {
  MD5 = "MD5",
  SHA1 = "SHA1",
}

export enum EBinaryDataType {
  Binary64 = "Binary64",
  HexBinary = "HexBinary",
}
