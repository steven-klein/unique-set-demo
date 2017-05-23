function exponential (list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = (i + 1); j < list.length; j++) {
      if (list[i] === list[j]) {
        list.splice(j, 1)
      }
    }
  }

  return list
}

module.exports = exponential
