export type TNewReleaseMessage = {
  // <xs:element name='MessageHeader' type='ern:MessageHeader'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='UpdateIndicator' type='avs:UpdateIndicator'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsBackfill' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='CatalogTransfer' type='ern:CatalogTransfer'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='WorkList' type='ern:WorkList'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='CueSheetList' type='ern:CueSheetList'></xs:element>
  // @todo not implemented yet

  // <xs:element name='ResourceList' type='ern:ResourceList'></xs:element>
  resourceList: TResourceList;

  // <xs:element minOccurs='0' name='CollectionList' type='ern:CollectionList'></xs:element>
  // @todo not implemented yet

  // <xs:element name='ReleaseList' type='ern:ReleaseList'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='DealList' type='ern:DealList'></xs:element>
  // @todo not implemented yet
};

export type TResourceList = {
  // <xs:element maxOccurs='unbounded' minOccurs='0' name='SoundRecording' type='ern:SoundRecording'></xs:element>
  soundRecording?: TSoundRecording[];

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='MIDI' type='ern:MIDI'></xs:element>
  // @todo not implemented yet

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

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='UserDefinedResource' type='ern:UserDefinedResource'></xs:element>
  // @todo not implemented yet
};

export type TSoundRecording = {
  // <xs:element minOccurs='0' name='SoundRecordingType' type='ern:SoundRecordingType'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsArtistRelated' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' name='SoundRecordingId' type='ern:SoundRecordingId'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='IndirectSoundRecordingId' type='ern:MusicalWorkId'></xs:element>
  // @todo not implemented yet

  // <xs:element name='ResourceReference'>
  //     <xs:simpleType>
  //         <xs:restriction base='xs:ID'>
  //             <xs:pattern value='A[\d\-_a-zA-Z]+' />
  //         </xs:restriction>
  //     </xs:simpleType>
  // </xs:element>
  resourceReference: `${string & { __brand: "^A[\\d\\-_a-zA-Z]+$" }}`;

  // <xs:element name='ReferenceTitle' type='ern:ReferenceTitle'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='InstrumentationDescription' type='ern:Description'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsMedley' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsPotpourri' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsInstrumental' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsBackground' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsHiddenResource' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsBonusResource' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='HasPreOrderFulfillment' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsComputerGenerated' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsRemastered' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='NoSilenceBefore' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='NoSilenceAfter' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='PerformerInformationRequired' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='LanguageOfPerformance' type='avs:IsoLanguageCode'></xs:element>
  // @todo not implemented yet

  // <xs:element name='Duration' type='xs:duration'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='RightsAgreementId' type='ern:RightsAgreementId'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='SoundRecordingCollectionReferenceList' type='ern:SoundRecordingCollectionReferenceList'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ResourceMusicalWorkReferenceList' type='ern:ResourceMusicalWorkReferenceList'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ResourceContainedResourceReferenceList' type='ern:ResourceContainedResourceReferenceList'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='CreationDate' type='ern:EventDate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='MasteredDate' type='ern:EventDate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='RemasteredDate' type='ern:EventDate'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' name='SoundRecordingDetailsByTerritory' type='ern:SoundRecordingDetailsByTerritory'></xs:element>
  soundRecordingDetailsByTerritory: TSoundRecordingDetailsByTerritory[];

  // <xs:element minOccurs='0' name='TerritoryOfCommissioning' type='ern:AllTerritoryCode'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='NumberOfFeaturedArtists' type='xs:integer'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='NumberOfNonFeaturedArtists' type='xs:integer'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='NumberOfContractedArtists' type='xs:integer'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='NumberOfNonContractedArtists' type='xs:integer'></xs:element>
  // @todo not implemented yet
};

export type TImage = {
  // <xs:element minOccurs='0' name='ImageType' type='ern:ImageType'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsArtistRelated' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' name='ImageId' type='ern:ResourceProprietaryId'></xs:element>
  // @todo not implemented yet

  // <xs:element name='ResourceReference'>
  //     <xs:simpleType>
  //         <xs:restriction base='xs:ID'>
  //             <xs:pattern value='A[\d\-_a-zA-Z]+' />
  //         </xs:restriction>
  //     </xs:simpleType>
  // </xs:element>
  resourceReference: `${string & { __brand: "^A[\\d\\-_a-zA-Z]+$" }}`;

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Title' type='ern:Title'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='CreationDate' type='ern:EventDate'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' name='ImageDetailsByTerritory' type='ern:ImageDetailsByTerritory'></xs:element>
  imageDetailsByTerritory: TImageDetailsByTerritory[];
};

export type TSoundRecordingDetailsByTerritory = {
  // <xs:choice>
  //     <xs:element maxOccurs='unbounded' name='TerritoryCode' type='ern:CurrentTerritoryCode'></xs:element>
  //     <xs:element maxOccurs='unbounded' name='ExcludedTerritoryCode' type='ern:CurrentTerritoryCode'></xs:element>
  // </xs:choice>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Title' type='ern:Title'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='DisplayArtist' type='ern:Artist'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='DisplayConductor' type='ern:Artist'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='ResourceContributor' type='ern:DetailedResourceContributor'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='IndirectResourceContributor' type='ern:IndirectResourceContributor'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='RightsAgreementId' type='ern:RightsAgreementId'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='DisplayArtistName' type='ern:Name'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='LabelName' type='ern:LabelName'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='RightsController' type='ern:TypedRightsController'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='RemasteredDate' type='ern:EventDate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ResourceReleaseDate' type='ern:EventDate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='OriginalResourceReleaseDate' type='ern:EventDate'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='PLine' type='ern:PLine'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='CourtesyLine' type='ern:CourtesyLine'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='SequenceNumber' type='xs:integer'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='HostSoundCarrier' type='ern:HostSoundCarrier'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='MarketingComment' type='ern:Comment'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Genre' type='ern:Genre'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='ParentalWarningType' type='ern:ParentalWarningType'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='AvRating' type='ern:AvRating'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='TechnicalSoundRecordingDetails' type='ern:TechnicalSoundRecordingDetails'></xs:element>
  technicalSoundRecordingDetails?: TTechnicalSoundRecordingDetails[];

  // <xs:element minOccurs='0' name='FulfillmentDate' type='ern:FulfillmentDate'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Keywords' type='ern:Keywords'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='Synopsis' type='ern:Synopsis'></xs:element>
  // @todo not implemented yet
};

export type TImageDetailsByTerritory = {
  // <xs:choice>
  //     <xs:element maxOccurs='unbounded' name='TerritoryCode' type='ern:CurrentTerritoryCode'></xs:element>
  //     <xs:element maxOccurs='unbounded' name='ExcludedTerritoryCode' type='ern:CurrentTerritoryCode'></xs:element>
  // </xs:choice>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Title' type='ern:Title'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='ResourceContributor' type='ern:DetailedResourceContributor'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='IndirectResourceContributor' type='ern:IndirectResourceContributor'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='DisplayArtistName' type='ern:Name'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='CLine' type='ern:CLine'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='Description' type='ern:Description'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='CourtesyLine' type='ern:CourtesyLine'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ResourceReleaseDate' type='ern:EventDate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='OriginalResourceReleaseDate' type='ern:EventDate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='FulfillmentDate' type='ern:FulfillmentDate'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Keywords' type='ern:Keywords'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='Synopsis' type='ern:Synopsis'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Genre' type='ern:Genre'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='ParentalWarningType' type='ern:ParentalWarningType'></xs:element>
  // @todo not implemented yet

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='TechnicalImageDetails' type='ern:TechnicalImageDetails'></xs:element>
  technicalImageDetails?: TTechnicalImageDetails[];
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

  // <xs:element minOccurs='0' name='DrmPlatformType' type='ern:DrmPlatformType'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ContainerFormat' type='ern:ContainerFormat'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='AudioCodecType' type='ern:AudioCodecType'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='BitRate' type='ern:BitRate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='NumberOfChannels' type='xs:integer'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='SamplingRate' type='ern:SamplingRate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='BitsPerSample' type='xs:integer'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='Duration' type='xs:duration'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ResourceProcessingRequired' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='UsableResourceDuration' type='xs:duration'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='IsPreview' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='PreviewDetails' type='ern:SoundRecordingPreviewDetails'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='FulfillmentDate' type='ern:FulfillmentDate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ConsumerFulfillmentDate' type='ern:FulfillmentDate'></xs:element>
  // @todo not implemented yet

  // <xs:choice minOccurs='0'>
  //     <xs:element maxOccurs='unbounded' name='FileAvailabilityDescription' type='ern:Description'></xs:element>
  //     @todo not implemented yet
  //     <xs:element maxOccurs='unbounded' name='File' type='ern:File'></xs:element>
  // </xs:choice>
  file: TFile[];

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Fingerprint' type='ern:Fingerprint'></xs:element>
  // @todo not implemented yet
};

export type TTechnicalImageDetails = {
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

  // <xs:element minOccurs='0' name='DrmPlatformType' type='ern:DrmPlatformType'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ContainerFormat' type='ern:ContainerFormat'></xs:element>
  // @todo not implemented yet

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

  // <xs:element minOccurs='0' name='IsPreview' type='xs:boolean'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='PreviewDetails' type='ern:PreviewDetails'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='FulfillmentDate' type='ern:FulfillmentDate'></xs:element>
  // @todo not implemented yet

  // <xs:element minOccurs='0' name='ConsumerFulfillmentDate' type='ern:FulfillmentDate'></xs:element>
  // @todo not implemented yet

  // <xs:choice minOccurs='0'>
  //     <xs:element maxOccurs='unbounded' name='FileAvailabilityDescription' type='ern:Description'></xs:element>
  //     @todo not implemented yet
  //     <xs:element maxOccurs='unbounded' name='File' type='ern:File'></xs:element>
  // </xs:choice>
  file: TFile[];

  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Fingerprint' type='ern:Fingerprint'></xs:element>
  // @todo not implemented yet
};

export type TFile = (TFileName | TFileUrl) & {
  // <xs:element minOccurs='0' name='HashSum' type='ern:HashSum'></xs:element>
  hashSum?: THashSum;
};

export type TFileName = {
  // <xs:element name='FileName' type='xs:string'></xs:element>
  fileName: string;

  // <xs:element minOccurs='0' name='FilePath' type='xs:string'></xs:element>
  filePath?: string;
};

export type TFileUrl = {
  // <xs:element name='URL' type='xs:string'></xs:element>
  url: string;
};

export type THashSum = {
  // <xs:element name='HashSum' type='xs:string'></xs:element>
  hashSum: string;

  // <xs:element name='HashSumAlgorithmType' type='ern:HashSumAlgorithmType'></xs:element>
  hashSumAlgorithmType: string;

  // <xs:element minOccurs='0' name='HashSumDataType' type='avs:BinaryDataType'></xs:element>
  hashSumDataType?: string;
};
