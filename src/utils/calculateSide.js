// export default function calculateSide(side, e, currentParameters) {
//   if (side === "right") {
//     let margin = 0;
//     let gridWidth = document.documentElement.clientWidth;
//     if (document.documentElement.clientWidth > 810) {
//       margin = (document.documentElement.clientWidth - 810) / 2;
//       gridWidth = 810;
//     }

//     // return Math.round((e.clientX / gridWidth) * 100 * 10) / 10;
//     console.log(currentParameters);
//     // return e.clientX - margin - currentParameters.left;
//   } else return;
// }

export default function calculateSide(side, e, currentParameters) {
  if (side === "right") {
    let margin = 0;
    let gridWidth = document.documentElement.clientWidth;
    if (document.documentElement.clientWidth > 810) {
      margin = (document.documentElement.clientWidth - 810) / 2;
      gridWidth = 810;
    }
    const left = (currentParameters.left / 100) * gridWidth;
    return (
      Math.round(((e.clientX - margin - left) / gridWidth) * 100 * 10) / 10
    );
  } else return;
}
