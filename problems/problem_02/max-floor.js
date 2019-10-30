const maxFloor = input => {
  if (input == 1) return 1
  return 1 + pyramid(1, 1, input)
};

const pyramid = (n, sum, brick) => {
  if (sum + n + 2 <= brick) {
    return 1 + pyramid(n + 2, sum + n + 2, brick)
  }
  return 0
}

module.exports = { maxFloor };
