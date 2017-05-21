var uniqueSet = function (list) {
    var list = list || this;
    let map = {};
    let set = [];
    let index = 0;

    for(index; index < list.length; index++){
        if(!map.hasOwnProperty(list[index])) {
            map[list[index]] = true;
            set.push(list[index]);
        }
    }

    return set;
}

module.exports = uniqueSet;
