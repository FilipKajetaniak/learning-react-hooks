export default function stickToGrid(data) {
  // these are not going to be hard-coded in future
  const horizontalLines = 35;
  const verticalLines = 26;

  let { left, top, height, width } = data;
  const verticalStep = 100 / 26;
  const horizontalStep = 1000 / 35;

  // calculating nearest breakpoint for left side
  if (left % verticalStep >= verticalStep / 2 ) {
    left = verticalStep * Math.ceil(left / verticalStep)
  } else {
    left = verticalStep * Math.floor(left / verticalStep)  
  }

  // calculating nearest breakpoint for top side
  if (top % horizontalStep >= horizontalStep / 2 ) {
    top = horizontalStep * Math.ceil(top / horizontalStep)
    console.log(top);
  } else {
    top = horizontalStep * Math.floor(top / horizontalStep)
    console.log(top);
  }

  return {
    left,
    top:  Math.floor(top),
    height,
    width
  }
}
