export default function calculateSide(side, e, currentParameters) {
  let margin = 0;
  let gridWidth = document.documentElement.clientWidth;
  if (document.documentElement.clientWidth > 810) {
    margin = (document.documentElement.clientWidth - 810) / 2;
    gridWidth = 810;
  }
  const left = (currentParameters.left / 100) * gridWidth;

  switch (side) {
    case "right":
      return (
        Math.round(((e.clientX - margin - left) / gridWidth) * 100 * 10) / 10
      );
    case "bottom":
      return e.clientY - currentParameters.top;
    default:
      return;
  }
}
