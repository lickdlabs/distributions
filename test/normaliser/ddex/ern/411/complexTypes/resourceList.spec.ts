import { assert } from "chai";
import { normaliseResourceList } from "../../../../../../src/normaliser/ddex/ern/411/complexTypes/resourceList";
import { Ern411 } from "../../../../../../src/types";

const buildRelease = (resourceGroup: unknown): Ern411.Release =>
  ({
    releaseReference: "R0",
    displayTitleText: [{ value: "Title" }],
    displayTitle: [],
    displayArtist: [
      {
        _attributes: { sequenceNumber: 1 },
        artistPartyReference: "P1",
        displayArtistRole: { value: "MainArtist" },
      },
    ],
    displayArtistName: [{ value: "Artist" }],
    releaseId: { proprietaryId: [] },
    resourceGroup,
  } as unknown as Ern411.Release);

const buildImage = (resourceReference: string): Ern411.Image =>
  ({
    resourceReference,
    type: { value: "FrontCoverImage" },
    resourceId: [],
    technicalDetails: [],
  } as unknown as Ern411.Image);

describe("normaliseResourceList (ern 4.1.1)", () => {
  it("normalises images linked directly on resourceGroup", () => {
    const image = buildImage("A2");

    normaliseResourceList(
      { image: [image] } as Ern411.ResourceList,
      {
        release: buildRelease({
          linkedReleaseResourceReference: [{ value: "A2" }],
        }),
      } as Ern411.ReleaseList,
    );

    assert.isDefined(image.displayArtist, "displayArtist should be inherited");
    assert.equal(image.displayArtist?.[0].artistPartyReference, "P1");
  });

  it("normalises images linked via resourceGroupContentItem", () => {
    const image = buildImage("A2");

    normaliseResourceList(
      { image: [image] } as Ern411.ResourceList,
      {
        release: buildRelease({
          resourceGroupContentItem: [
            {
              sequenceNumber: 1,
              releaseResourceReference: "A1",
              linkedReleaseResourceReference: [{ value: "A2" }],
            },
          ],
        }),
      } as Ern411.ReleaseList,
    );

    assert.isDefined(
      image.displayArtist,
      "displayArtist should be inherited via resourceGroupContentItem",
    );
    assert.equal(image.displayArtist?.[0].artistPartyReference, "P1");
  });

  it("normalises images linked via nested resourceGroup (sub-group)", () => {
    const image = buildImage("A2");

    normaliseResourceList(
      { image: [image] } as Ern411.ResourceList,
      {
        release: buildRelease({
          resourceGroup: [
            {
              resourceGroupContentItem: [
                {
                  sequenceNumber: 1,
                  releaseResourceReference: "A1",
                  linkedReleaseResourceReference: [{ value: "A2" }],
                },
              ],
            },
          ],
        }),
      } as Ern411.ReleaseList,
    );

    assert.isDefined(
      image.displayArtist,
      "displayArtist should be inherited via nested sub-group",
    );
  });

  it("leaves images untouched when no link matches", () => {
    const image = buildImage("A2");

    normaliseResourceList(
      { image: [image] } as Ern411.ResourceList,
      {
        release: buildRelease({
          resourceGroupContentItem: [
            {
              sequenceNumber: 1,
              releaseResourceReference: "A1",
              linkedReleaseResourceReference: [{ value: "A9" }],
            },
          ],
        }),
      } as Ern411.ReleaseList,
    );

    assert.isUndefined(image.displayArtist);
  });
});
