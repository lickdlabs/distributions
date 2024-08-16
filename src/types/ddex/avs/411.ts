export enum AdditionalTitleType {}
export enum AdministratingRecordCompanyRole {}
export enum AffiliationType {}
export enum AllTerritoryCode {}
export enum AspectRatioType {}
export enum AudioCodecType {}
export enum TerritoryCodeTypeIncludingDeprecatedCodes {}

export enum BinaryDataType {
  BINARY64 = "Binary64",
  HEX_BINARY = "HexBinary",
}

export enum CarrierType {}
export enum CompositeMusicalWorkType {}
export enum ContributorRole {}
export enum CurrentTerritoryCode {}

export enum DisplayArtistRole {
  ARTIST = "Artist",
  FEATURED_ARTIST = "FeaturedArtist",
  MAIN_ARTIST = "MainArtist",
}

export enum ExpressionType {}
export enum ExternallyLinkedResourceType {}
export enum FingerprintAlgorithmType {}

export enum HashSumAlgorithmType {
  CRC32 = "CRC32",
  MD2 = "MD2",
  MD4 = "MD4",
  MD4_MLNET = "MD4(MLNET)",
  MD5 = "MD5",
  MDC2 = "MDC2",
  RMD160 = "RMD160",
  SHA = "SHA",
  SHA1 = "SHA1",
  SHA2 = "SHA2",
  SHA_224 = "SHA-224",
  SHA_256 = "SHA-256",
  SHA3 = "SHA3",
  SHA_384 = "SHA-384",
  SHA_512 = "SHA-512",
  UserDefined = "UserDefined",
}

export enum ImageCodecType {}

export enum ImageType {
  BACK_COVER_IMAGE = "BackCoverImage",
  BOOKLET_BACK_IMAGE = "BookletBackImage",
  BOOKLET_FRONT_IMAGE = "BookletFrontImage",
  DOCUMENT_IMAGE = "DocumentImage",
  FRONT_COVER_IMAGE = "FrontCoverImage",
  ICON = "Icon",
  LOGO = "Logo",
  PHOTOGRAPH = "Photograph",
  POSTER = "Poster",
  TRAY_IMAGE = "TrayImage",
  UNKNOWN = "Unknown",
  USER_DEFINED = "UserDefined",
  VIDEO_SCREEN_CAPTURE = "VideoScreenCapture",
  WALLPAPER = "Wallpaper",
  PORTRAIT = "Portrait",
}

export enum InstrumentType {}
export enum IsoLanguageCode {}
export enum LabelType {}
export enum LinkDescription {}
export enum MessageControlType {}
export enum PartyRelationshipType {}

export enum ParentalWarningType {
  EXPLICIT = "Explicit",
  EXPLICIT_CONTENT_EDITED = "ExplicitContentEdited",
  NO_ADVICE_AVAILABLE = "NoAdviceAvailable",
  NOT_EXPLICIT = "NotExplicit",
  UNKNOWN = "Unknown",
  USER_DEFINED = "UserDefined",
}

export enum RatingAgency {}
export enum RatingReason {}
export enum RecordingMode {}
export enum ResourceRelationshipType {}
export enum ReleaseProfileVariantVersionId {}
export enum ReleaseProfileVersionId {}

export enum ReleaseRelationshipType {
  HAS_ARTIST_FROM_ENSEMBLE = "HasArtistFromEnsemble",
  HAS_ARTIST_FROM_SAME_ENSEMBLE = "HasArtistFromSameEnsemble",
  HAS_CONTENT_FROM = "HasContentFrom",
  HAS_ENSEMBLE_WITH_ARTIST = "HasEnsembleWithArtist",
  HAS_SAME_ARTIST = "HasSameArtist",
  HAS_SAME_RECORDING_PROJECT = "HasSameRecordingProject",
  HAS_SIMILAR_CONTENT = "HasSimilarContent",
  IS_DIGITAL_EQUIVALENT_TO_PHYSICAL = "IsDigitalEquivalentToPhysical",
  IS_EQUIVALENT_TO_AUDIO = "IsEquivalentToAudio",
  IS_EQUIVALENT_TO_VIDEO = "IsEquivalentToVideo",
  IS_EXTENDED_FROM_ALBUM = "IsExtendedFromAlbum",
  IS_FROM_AUDIO = "IsFromAudio",
  IS_FROM_VIDEO = "IsFromVideo",
  IS_PARENT_RELEASE = "IsParentRelease",
  IS_PHYSICAL_EQUIVALENT_TO_DIGITAL = "IsPhysicalEquivalentToDigital",
  IS_RELEASE_FROM_RELEASE = "IsReleaseFromRelease",
  IS_SHORTENED_FROM_ALBUM = "IsShortenedFromAlbum",
  UNKNOWN = "Unknown",
  USER_DEFINED = "UserDefined",
  IS_DIFFERENT_ENCODING = "IsDifferentEncoding",
}

export enum ReleaseTypeErn4 {
  ALBUM = "Album",
  ALERT_TONE_RELEASE = "AlertToneRelease",
  AS_PER_CONTRACT = "AsPerContract",
  AUDIO_BOOK_RELEASE = "AudioBookRelease",
  AUDIO_CLIP_RELEASE = "AudioClipRelease",
  BACK_COVER_IMAGE_RELEASE = "BackCoverImageRelease",
  BOOKLET_BACK_IMAGE_RELEASE = "BookletBackImageRelease",
  BOOKLET_FRONT_IMAGE_RELEASE = "BookletFrontImageRelease",
  BOOKLET_RELEASE = "BookletRelease",
  BUNDLE = "Bundle",
  CLASSICAL_ALBUM = "ClassicalAlbum",
  CLASSICAL_DIGITAL_BOXED_SET = "ClassicalDigitalBoxedSet",
  CLASSICAL_MULTIMEDIA_ALBUM = "ClassicalMultimediaAlbum",
  CONCERT_VIDEO = "ConcertVideo",
  DIGITAL_BOX_SET_RELEASE = "DigitalBoxSetRelease",
  DJ_MIX = "DjMix",
  DOCUMENTARY = "Documentary",
  DRAMA = "Drama",
  E_BOOK_RELEASE = "EBookRelease",
  EP = "EP",
  EPISODE = "Episode",
  FEATURE_FILM = "FeatureFilm",
  KARAOKE_RELEASE = "KaraokeRelease",
  LIVE_EVENT_VIDEO = "LiveEventVideo",
  LOGO_RELEASE = "LogoRelease",
  LONG_FORM_MUSICAL_WORK_VIDEO_RELEASE = "LongFormMusicalWorkVideoRelease",
  LONG_FORM_NON_MUSICAL_WORK_VIDEO_RELEASE = "LongFormNonMusicalWorkVideoRelease",
  LYRIC_SHEET_RELEASE = "LyricSheetRelease",
  MULTIMEDIA_ALBUM = "MultimediaAlbum",
  MULTIMEDIA_DIGITAL_BOXED_SET = "MultimediaDigitalBoxedSet",
  MULTIMEDIA_SINGLE = "MultimediaSingle",
  MUSICAL_WORK_BASED_GAME_RELEASE = "MusicalWorkBasedGameRelease",
  NON_MUSICAL_WORK_BASED_GAME_RELEASE = "NonMusicalWorkBasedGameRelease",
  PLAYLIST = "PlayList",
  RINGBACK_TONE_RELEASE = "RingbackToneRelease",
  RINGTONE_RELEASE = "RingtoneRelease",
  SEASON = "Season",
  SERIES = "Series",
  SHEET_MUSIC_RELEASE = "SheetMusicRelease",
  SHORT_FILM = "ShortFilm",
  SINGLE = "Single",
  SINGLE_RESOURCE_RELEASE = "SingleResourceRelease",
  STEM_BUNDLE = "StemBundle",
  USER_DEFINED = "UserDefined",
  VIDEO_ALBUM = "VideoAlbum",
  VIDEO_MASTERTONE_RELEASE = "VideoMastertoneRelease",
  VIDEO_SINGLE = "VideoSingle",
  WALLPAPER_RELEASE = "WallpaperRelease",
  AUDIO_DRAMA_RELEASE = "AudioDramaRelease",
  DRAMATICO_MUSICAL_VIDEO_RELEASE = "DramaticoMusicalVideoRelease",
}

export enum ResourceGroupType {
  COMPONENT = "Component",
  COMPONENT_RELEASE = "ComponentRelease",
  MULTI_WORK_PART = "MultiWorkPart",
  RELEASE_COMPONENT = "ReleaseComponent",
  SIDE = "Side",
}

export enum RightsControllerRole {}
export enum RightsControllerType {}
export enum RightsCoverage {}

export enum SoundRecordingType {
  MUSICAL_WORK_READALONG_SOUND_RECORDING = "MusicalWorkReadalongSoundRecording",
  MUSICAL_WORK_SOUND_RECORDING = "MusicalWorkSoundRecording",
  NON_MUSICAL_WORK_READALONG_SOUNDRECORDING = "NonMusicalWorkReadalongSoundRecording",
  NON_MUSICAL_WORK_SOUND_RECORDING = "NonMusicalWorkSoundRecording",
  SPOKEN_WORD_SOUND_RECORDING = "SpokenWordSoundRecording",
  UNKNOWN = "Unknown",
  USER_DEFINED = "UserDefined",
  AUDIO_STEM = "AudioStem",
}

export enum SubTitleType {}
export enum TerritoryCodeType {}

export enum TextType {
  CAPTION = "Caption",
  E_BOOK = "EBook",
  LINER_NOTES = "LinerNotes",
  LYRIC_TEXT = "LyricText",
  NON_INTERACTIVE_BOOKLET = "NonInteractiveBooklet",
  TEXT_DOCUMENT = "TextDocument",
  UNKNOWN = "Unknown",
  USER_DEFINED = "UserDefined",
}

export enum UnitOfBitRate {}
export enum UnitOfExtent {}
export enum UnitOfFrequency {}
export enum UseType {}
export enum VersionType {}
