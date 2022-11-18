export const removeTags = (value) => value
  .replaceAll('<p>', '')
  .replaceAll('</p>', '')
  .replaceAll('<b>', '')
  .replaceAll('</b>', '');