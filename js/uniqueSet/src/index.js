function uniqueSet (list) {
  var interator = list || this
  var map = {}
  var set = []
  var index = 0

  for (index; index < interator.length; index++) {
    if (!map.hasOwnProperty(interator[index])) {
      map[interator[index]] = true
      set.push(interator[index])
    }
  }

  return set
}

module.exports = uniqueSet
