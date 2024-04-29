

export const createPDFBlob = (...fileBlobs: Blob[]) => {
  return new Blob(fileBlobs, {
    type: 'application/pdf',
  });
};
