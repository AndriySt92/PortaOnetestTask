export const findAverage = (numbers) => {
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    sum += element
  }

  return sum/numbers.length
}
