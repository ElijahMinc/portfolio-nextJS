export const downloadFile = (fileBlob: Blob, fileName: string = '') => {
  const linkElement = document.createElement('a');

  const fileURL = window.URL.createObjectURL(fileBlob);

  linkElement.setAttribute('href', fileURL);
  linkElement.setAttribute('download', fileName);
  linkElement.click();

  URL.revokeObjectURL(fileURL);
};
