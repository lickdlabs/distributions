import { TNewRelease } from "../../../types/ddex/v4/newRelease";

export const newRelease = (object: any): TNewRelease => ({
  resourceList: {
    soundRecording: object.ResourceList[0].SoundRecording.map(
      (soundRecording: any) => ({
        technicalDetails: soundRecording.TechnicalDetails.map(
          (technicalDetails: any) => ({
            file: technicalDetails.File.map((file: any) => ({
              uri: file.URI[0],
            })),
          }),
        ),
      }),
    ),
    image: object.ResourceList[0].Image.map((image: any) => ({
      technicalDetails: image.TechnicalDetails.map((technicalDetails: any) => ({
        file: technicalDetails.File.map((file: any) => ({
          uri: file.URI[0],
        })),
      })),
    })),
  },
});
