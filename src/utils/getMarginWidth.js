export default function getMarginWidth(width) {
  let margin = 0;
  let gridWidth = document.documentElement.clientWidth;
  if (document.documentElement.clientWidth > width) {
    margin = (document.documentElement.clientWidth - width) / 2;
    gridWidth = width;
  }
  return { margin, gridWidth };
}
