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
  // if window is wider than the grid we need to calculate margins
  let margin = 0;
  let gridWidth = document.documentElement.clientWidth;
  if (document.documentElement.clientWidth > 810) {
    margin = (document.documentElement.clientWidth - 810) / 2;
    gridWidth = 810;
  }
  const differenceX = end.x - start.x;
  const differenceY = end.y - start.y;

  const toPercent = width => Math.round((width / gridWidth) * 100 * 10) / 10;
  // bottom-right direction
  if (differenceX > 0 && differenceY > 0) {
    return {
      left: `${toPercent(start.x - margin)}%`,
      top: `${start.y}px`,
      width: `${toPercent(differenceX)}%`,
      height: `${differenceY}px`
    };
  } // top-right direction
  else if (differenceX > 0 && differenceY < 0) {
    return {
      left: `${toPercent(start.x - margin)}%`,
      top: `${end.y}px`,
      width: `${toPercent(differenceX)}%`,
      height: `${start.y - end.y}px`
    };
  } // top-left direction
  else if (differenceX < 0 && differenceY < 0) {
    return {
      left: `${toPercent(end.x - margin)}%`,
      top: `${end.y}px`,
      width: `${toPercent(start.x - end.x)}%`,
      height: `${start.y - end.y}px`
    };
  } // bottom-left direction
  else {
    return {
      left: `${toPercent(end.x - margin)}%`,
      top: `${start.y}px`,
      width: `${toPercent(start.x - end.x)}%`,
      height: `${differenceY}px`
    };
  }
}
