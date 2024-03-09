export const findMax = (numbers) => {
  let max = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    let number = numbers[i]

    if (number > max) {
      max = number
    }
  }

  return max
}
