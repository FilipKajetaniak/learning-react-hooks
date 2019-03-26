import getMarginWidth from "./getMarginWidth";

// this function accepts arguments for position where cursor
// was clickend (start - {x: number, y: number})
// and where it was released (end - {x: number, y: number})
export default function calculateStyles(start, end) {
  if (
    start.x === null ||
    start.y === null ||
    end.x === null ||
    end.y === null
  ) {
    return {
      left: null,
      top: null,
      width: null,
      height: null
    };
  }
  const { margin, gridWidth } = getMarginWidth();
  const differenceX = end.x - start.x;
  const differenceY = end.y - start.y;

  const toPercent = width => Math.round((width / gridWidth) * 100 * 10) / 10;
  // bottom-right direction
  if (differenceX > 0 && differenceY > 0) {
    return {
      left: toPercent(start.x - margin),
      top: start.y,
      width: toPercent(differenceX),
      height: differenceY
    };
  } // top-right direction
  else if (differenceX > 0 && differenceY < 0) {
    return {
      left: toPercent(start.x - margin),
      top: end.y,
      width: toPercent(differenceX),
      height: start.y - end.y
    };
  } // top-left direction
  else if (differenceX < 0 && differenceY < 0) {
    return {
      left: toPercent(end.x - margin),
      top: end.y,
      width: toPercent(start.x - end.x),
      height: start.y - end.y
    };
  } // bottom-left direction
  else {
    return {
      left: toPercent(end.x - margin),
      top: start.y,
      width: toPercent(start.x - end.x),
      height: differenceY
    };
  }
}
