// this could've been a simple Math.cos :cry:
export const calculatePosition = (position, movRate, posLimit, [direction, setDirection]) => {
  if (position > posLimit) {
    setDirection(1)
    direction = 1
  } else if (position < posLimit * -1) {
    setDirection(0)
    direction = 0
  }
  return movRate * (direction === 1 ? -1 : 1)
}
