export default function getMarginWidth() {
  let margin = 0;
  let gridWidth = document.documentElement.clientWidth;
  if (document.documentElement.clientWidth > 810) {
    margin = (document.documentElement.clientWidth - 810) / 2;
    gridWidth = 810;
  }
  return { margin, gridWidth };
}
