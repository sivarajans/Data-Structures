"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Fenwick Tree - general tree used for range queries.
it works with bits for positional sum storage. 

the highest element responsible can be found using 
Bits(n) + Least Significant Bits(n);


same way the lowest element responsible for range query can be found using
Bits(n) - Least Significant Bits(n);

Below example is Index 1 based.
*/
var FenWickTree = /*#__PURE__*/function () {
  // array of elements to add in initial fenwick tree.
  function FenWickTree(array) {
    _classCallCheck(this, FenWickTree);

    // fenwick array - just copying real array before construct
    this.fenwick = [0].concat(array); // first position is dummy 0.

    this._construct();
  } // add more value at index.


  _createClass(FenWickTree, [{
    key: "add",
    value: function add(index, value) {
      while (index < this.fenwick.length) {
        this.fenwick[index] += value;
        index += this._getLSB(index);
      }
    } // set disired value at index

  }, {
    key: "set",
    value: function set(index, value) {
      var currentSum = this.rangeSum(index, index);
      var propogate = value - currentSum;
      this.add(index, propogate);
    }
  }, {
    key: "prefixSum",
    value: function prefixSum(untilIndex) {
      var sum = 0;

      while (untilIndex > 0) {
        sum += this.fenwick[untilIndex];
        untilIndex -= this._getLSB(untilIndex);
      }

      return sum;
    }
  }, {
    key: "rangeSum",
    value: function rangeSum(fromIndex, toIndex) {
      return this.prefixSum(toIndex) - this.prefixSum(fromIndex - 1);
    }
  }, {
    key: "_construct",
    value: function _construct() {
      for (var i = 1; i < this.fenwick.length; i++) {
        var j = i + this._getLSB(i);

        if (j < this.fenwick.length) this.fenwick[j] += this.fenwick[i];
      }
    }
  }, {
    key: "_getLSB",
    value: function _getLSB(pos) {
      return pos & -pos;
    }
  }]);

  return FenWickTree;
}();

exports["default"] = FenWickTree;