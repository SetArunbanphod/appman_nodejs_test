const minStep = input => {
  // return recursiveStep(input, 0)
  if (input == 1) return 0
  else if (input % 2 == 0) {
    return 1 + minStep(input / 2)
  }
  else {
    return 1 + minStep(input - 1)
  }
};

const recursiveStep = async (input, step) => {
  if (input == 1) {
    return step
  }
  else if (input % 2 == 0) {
    return await recursiveStep(input / 2, step + 1)
  }
  else {
    return await recursiveStep(input - 1, step + 1)
  }
}

module.exports = { minStep };
