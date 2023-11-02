import { TNewRelease } from "../../../types/ddex/v3/newRelease";

export const newRelease = (object: any): TNewRelease => ({
  resourceList: {
    soundRecording: object.ResourceList[0].SoundRecording.map(
      (soundRecording: any) => ({
        soundRecordingDetailsByTerritory:
          soundRecording.SoundRecordingDetailsByTerritory.map(
            (soundRecordingDetailsByTerritory: any) => ({
              technicalSoundRecordingDetails:
                soundRecordingDetailsByTerritory.TechnicalSoundRecordingDetails.map(
                  (technicalSoundRecordingDetails: any) => ({
                    file: technicalSoundRecordingDetails.File.map(
                      (file: any) => ({
                        fileName: file.FileName[0],
                        filePath: file.FilePath ? file.FilePath[0] : undefined,
                      }),
                    ),
                  }),
                ),
            }),
          ),
      }),
    ),
    image: object.ResourceList[0].Image.map((image: any) => ({
      imageDetailsByTerritory: image.ImageDetailsByTerritory.map(
        (imageDetailsByTerritory: any) => ({
          technicalImageDetails:
            imageDetailsByTerritory.TechnicalImageDetails.map(
              (technicalImageDetails: any) => ({
                file: technicalImageDetails.File.map((file: any) => ({
                  fileName: file.FileName[0],
                  filePath: file.FilePath ? file.FilePath[0] : undefined,
                })),
              }),
            ),
        }),
      ),
    })),
  },
});
