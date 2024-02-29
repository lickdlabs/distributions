import * as v41 from "../newReleaseMessage";

export * from "../newReleaseMessage";

export type TNewReleaseMessage = Omit<
  v41.TNewReleaseMessage,
  "resourceList"
> & {
  // <xs:element name='ResourceList' type='ern:ResourceList'></xs:element>
  resourceList: TResourceList;
};

export type TResourceList = Omit<v41.TResourceList, "image"> & {
  // <xs:element maxOccurs='unbounded' minOccurs='0' name='Image' type='ern:Image'></xs:element>
  image?: TImage[];
};

export type TImage = Omit<v41.TImage, "technicalDetails"> & {
  // <xs:element maxOccurs='unbounded' minOccurs='0' name='TechnicalDetails' type='ern:TechnicalImageDetails'></xs:element>
  technicalDetails?: TTechnicalImageDetails[];
};

export type TTechnicalImageDetails = Omit<
  v41.TTechnicalImageDetails,
  "keywords" | "synopsis"
>;
