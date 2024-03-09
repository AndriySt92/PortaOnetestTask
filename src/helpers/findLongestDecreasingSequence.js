export const findLongestDecreasingSequence = (numbers) => {
  let longestSequence = []
  let tempSequence = [numbers[0]]

  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i]
    //push current number to tempSequence if number is smaller than the previous number
    if (tempSequence[tempSequence.length - 1] > number) {
      tempSequence.push(number)
      continue
    }
    // put tempSequence to longestSequence if tempSequence is londer
    if (tempSequence.length >= longestSequence.length) {
      longestSequence = [...tempSequence]
    }
    //push current number to compare with the next number in the next iteration
    tempSequence = [number]
  }
  // put tempSequence to longestSequence if tempSequence is londer
  longestSequence = longestSequence.length <= tempSequence.length ? tempSequence : longestSequence

  return longestSequence
}
