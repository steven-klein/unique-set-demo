function recursive (list, map, filtered) {
  if (list.length === 0) {
    return filtered
  }

  if (!map.hasOwnProperty(list[0])) {
    map[list[0]] = true
    filtered.push(list[0])
  }

  list.shift()

  return recursive(list, map, filtered)
}

module.exports = recursive
