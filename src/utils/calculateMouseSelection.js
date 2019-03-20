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
  if (document.documentElement.clientWidth > 810) {
    margin = (document.documentElement.clientWidth - 810) / 2;
  }
  const differenceX = end.x - start.x;
  const differenceY = end.y - start.y;

  // bottom-right direction
  if (differenceX > 0 && differenceY > 0) {
    return {
      left: start.x - margin,
      top: start.y,
      width: `${differenceX}px`,
      height: `${differenceY}px`
    };
  } // top-right direction
  else if (differenceX > 0 && differenceY < 0) {
    return {
      left: start.x - margin,
      top: end.y,
      width: `${differenceX}px`,
      height: `${start.y - end.y}px`
    };
  } // top-left direction
  else if (differenceX < 0 && differenceY < 0) {
    return {
      left: end.x - margin,
      top: end.y,
      width: `${start.x - end.x}px`,
      height: `${start.y - end.y}px`
    };
  } // bottom-left direction
  else {
    return {
      left: Math.abs(end.x - margin),
      top: start.y,
      width: `${start.x - end.x}px`,
      height: `${differenceY}px`
    };
  }
}
