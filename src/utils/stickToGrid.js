export default function stickToGrid(data) {
  // these are not going to be hard-coded in future
  const horizontalLines = 35;
  const verticalLines = 26;

  const { left, top, height, width } = data;
  const verticalStep = 100 / verticalLines;
  const horizontalStep = 1000 / horizontalLines;

  const calcNearestBreakpoint = (value, step) => {
    if (value % step >= step / 2 ) {
     return step * Math.ceil(value / step)
    } else {
      return step * Math.floor(value / step)
    }
  }

  return {
    left: calcNearestBreakpoint(left, verticalStep),
    top:  Math.floor(calcNearestBreakpoint(top, horizontalStep)),
    height: Math.floor(calcNearestBreakpoint(height, horizontalStep)),
    width: calcNearestBreakpoint(width, verticalStep),
  }
}
