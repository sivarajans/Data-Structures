"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Queue - is a data structure that helps to take first in first out. (FIFO)

Below is the implementation of queue using array.
*/
var Queue = /*#__PURE__*/function () {
  function Queue(arr) {
    _classCallCheck(this, Queue);

    this.entries = arr !== null && arr !== void 0 ? arr : [];
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(value) {
      this.entries.push(value);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this.entries.shift();
    }
  }]);

  return Queue;
}();

exports["default"] = Queue;