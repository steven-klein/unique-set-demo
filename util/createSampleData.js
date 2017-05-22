var fs = require('fs');
var randomList = require('./randomList');

String.prototype.replaceAll_1 = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

function createSampleData(name = 'sample', type, list, size) {
  var list = (list !== null) ? list : randomList(size || 100000);
  var type = (type !== null) ? type : "json";

  if(type === "txt"){
      list = list.join().replaceAll_1(',', ' ');
  } else {
      list = JSON.stringify(list);
  }

  fs.writeFileSync(`./data/${name}.${type}`, list);
}

var ordered = [
  'angela@example.com',
  'sandy@example.com',
  'matthew@example.com',
  'matthew@example.com',
  'sandy@example.com',
  'steven@example.com',
  'david@example.com',
  'angela@example.com',
  'david@example.com',
  'steven@example.com'
];

createSampleData('ordered', null, ordered, null);
createSampleData('ordered', 'txt', ordered, null);
createSampleData('large', null, null);
createSampleData('large', 'txt', null);

(function (ordered) {
  var data = `window.orderedSet = ${JSON.stringify(ordered)};\nwindow.largeSet = ${JSON.stringify(randomList(100000))};\n`
  fs.writeFileSync('./static/data.js', data)
})(ordered)
