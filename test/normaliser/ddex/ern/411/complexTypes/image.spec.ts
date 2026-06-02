import { assert } from "chai";
import { normaliseImage } from "../../../../../../src/normaliser/ddex/ern/411/complexTypes/image";
import { Ern411 } from "../../../../../../src/types";

const buildRelease = (overrides: Partial<Ern411.Release> = {}): Ern411.Release =>
  ({
    releaseReference: "R0",
    releaseType: [{ value: "SingleResourceRelease" }],
    releaseId: { proprietaryId: [] },
    displayTitleText: [{ value: "Title" }],
    displayTitle: [{ titleText: "Title" }],
    displayArtistName: [{ value: "Artist" }],
    displayArtist: [
      {
        _attributes: { sequenceNumber: 1 },
        artistPartyReference: "P1",
        displayArtistRole: { value: "MainArtist" },
      },
    ],
    releaseLabelReference: [{ value: "P_LABEL" }],
    genre: [],
    parentalWarningType: [],
    resourceGroup: {},
    ...overrides,
  } as unknown as Ern411.Release);

const buildImage = (): Ern411.Image =>
  ({
    resourceReference: "A2",
    type: { value: "FrontCoverImage" },
    resourceId: [],
    technicalDetails: [],
  } as unknown as Ern411.Image);

describe("normaliseImage (ern 4.1.1)", () => {
  it("copies releaseDate / originalReleaseDate into relatedRelease without mutating the release", () => {
    const release = buildRelease({
      releaseDate: [{ value: "2024-01-01" }],
      originalReleaseDate: [{ value: "2023-06-15" }],
    } as unknown as Partial<Ern411.Release>);
    const image = buildImage();

    normaliseImage(image, release);

    assert.lengthOf(release.releaseDate!, 1, "release.releaseDate must not be mutated");
    assert.lengthOf(
      release.originalReleaseDate!,
      1,
      "release.originalReleaseDate must not be mutated",
    );
    assert.equal((release.releaseDate as any)[0].value, "2024-01-01");
    assert.equal((release.originalReleaseDate as any)[0].value, "2023-06-15");

    assert.isDefined(image.relatedRelease);
    assert.equal(
      (image.relatedRelease![0].releaseDate as any).value,
      "2024-01-01",
    );
    assert.equal(
      (image.relatedRelease![0].originalReleaseDate as any).value,
      "2023-06-15",
    );
  });

  it("normalising multiple images leaves the release intact for all of them", () => {
    const release = buildRelease({
      originalReleaseDate: [{ value: "2023-06-15" }],
    } as unknown as Partial<Ern411.Release>);
    const imageA = buildImage();
    const imageB = buildImage();

    normaliseImage(imageA, release);
    normaliseImage(imageB, release);

    assert.lengthOf(release.originalReleaseDate!, 1);
    assert.equal(
      (imageA.relatedRelease![0].originalReleaseDate as any).value,
      "2023-06-15",
    );
    assert.equal(
      (imageB.relatedRelease![0].originalReleaseDate as any).value,
      "2023-06-15",
    );
  });

  it("copies displayArtist / displayArtistName onto the image", () => {
    const release = buildRelease();
    const image = buildImage();

    normaliseImage(image, release);

    assert.deepEqual(image.displayArtist, release.displayArtist);
    assert.deepEqual(image.displayArtistName, release.displayArtistName);
  });

  it("does not overwrite fields that the image already has", () => {
    const ownArtist = [
      {
        _attributes: { sequenceNumber: 1 },
        artistPartyReference: "P_OWN",
        displayArtistRole: { value: "MainArtist" },
      },
    ] as unknown as Ern411.DisplayArtist[];
    const release = buildRelease();
    const image = {
      ...buildImage(),
      displayArtist: ownArtist,
    } as unknown as Ern411.Image;

    normaliseImage(image, release);

    assert.deepEqual(image.displayArtist, ownArtist);
  });
});
