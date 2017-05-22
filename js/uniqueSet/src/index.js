var uniqueSet = function (list) {
  var interator = list || this
  let map = {}
  let set = []
  let index = 0

  for (index; index < interator.length; index++) {
    if (!map.hasOwnProperty(interator[index])) {
      map[interator[index]] = true
      set.push(interator[index])
    }
  }

  return set
}

module.exports = uniqueSet
