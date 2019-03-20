export default function stickToGrid(data) {
  // these are not going to be hard-coded in future
  const horizontalLines = 35;
  const verticalLines = 26;

  const { left, width } = data;
  const horizontalStep = 100 / 35;
  console.log(left % horizontalStep, horizontalStep);

  const newData = data;
  newData.left = left - (left % horizontalStep);

  return newData;
}
