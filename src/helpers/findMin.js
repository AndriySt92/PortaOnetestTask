export const findMin = (numbers) => {
  let min = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    let element = numbers[i]

    if (element < min) {
      min = element
    }
  }

  return min
}
