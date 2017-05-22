var assert = require('assert');
var now = require("performance-now");
var uniqueSet = require('../src');
var orderedData = require('../../../data/ordered.json');
var largeData = require('../../../data/large.json');

describe('List', function() {
  describe('Ordered', function() {
    it('Should return the list in the original order without any duplicates.', function() {
      assert.deepEqual(["angela@example.com","sandy@example.com","matthew@example.com","steven@example.com","david@example.com"], uniqueSet(orderedData));
    });
  });

  describe('Time', function() {
    it('Should complete execution in under 1 second where the list has a length of 100,000 with 50% random duplicates.', function() {
        var start = now();
        var end = null;
        var executionTime = null;
        uniqueSet(largeData);
        end = now();
        executionTime = (end-start).toFixed(3);
        // executionTime expressed in milliseconds.  1 sec = 1000 milliseconds
        assert(executionTime < 1000);
    });
  });
});
