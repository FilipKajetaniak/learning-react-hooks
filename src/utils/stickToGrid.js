export default function stickToGrid(data, gridParameters) {
  // these are not going to be hard-coded in future
  const horizontalLines = gridParameters.horizontalLines;
  const verticalLines = gridParameters.verticalLines;

  const { left, top, height, width } = data;
  const verticalStep = 100 / verticalLines;
  const horizontalStep = gridParameters.height / horizontalLines;

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
