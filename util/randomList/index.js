var shuffle = require('lodash/shuffle');
var randomstring = require('randomstring');

var randomList = function (n) {
    var list = [];
    var i = 0;

    for(i; i < n/2; i++) {
        list.push(randomstring.generate(7).toString() + '@example.com');
    }

    list = list.concat(list);
    return shuffle(list);
}

module.exports = randomList
