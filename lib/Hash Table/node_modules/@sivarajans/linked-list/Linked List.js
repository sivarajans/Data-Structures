"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LinkedListNode = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Singly Linked List Implementation
*/
var LinkedListNode = function LinkedListNode(data, next) {
  _classCallCheck(this, LinkedListNode);

  this.data = data;
  this.next = next;
};

exports.LinkedListNode = LinkedListNode;

var LinkedList = /*#__PURE__*/function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  _createClass(LinkedList, [{
    key: "add",
    value: function add(data) {
      var newNode = new LinkedListNode(data, null);

      if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }

      this.size++;
    }
  }, {
    key: "remove",
    value: function remove(node) {
      var current = this.head;
      var prev = null;

      while (current) {
        if (current === node) {
          if (prev == null) this.head = current.next; // head removal
          else prev.next = current.next; // mid removal

          if (current.next == null) {
            // tail removal
            prev.next = null;
            this.tail = prev;
          }

          this.size--;
          return true;
        } else {
          prev = current;
          current = current.next;
        }
      }

      return false;
    }
  }, {
    key: "indexOf",
    value: function indexOf(node) {
      var index = -1;
      var current = this.head;

      while (current) {
        if (current === node) return ++index;else {
          current = current.next;
          index++;
        }
      }

      return -1;
    }
  }, {
    key: "addFirst",
    value: function addFirst(data) {
      if (this.size == 0) this.add(data);else {
        var newNode = new LinkedListNode(data, this.head);
        this.head = newNode;
        this.size++;
      }
    }
  }, {
    key: "addAtIndex",
    value: function addAtIndex(data, index) {
      this.isValidIndex(index); // move until index

      if (index == 0) this.addFirst(data);
      var leftNode = this.head;

      while (index > 1) {
        leftNode = leftNode.next;
        index--;
      }

      leftNode.next = new LinkedListNode(data, leftNode.next);
      this.size++;
    }
  }, {
    key: "removeAtIndex",
    value: function removeAtIndex(index) {
      this.isValidIndex(index);
      var toRemove = this.head;

      while (index > 0) {
        toRemove = toRemove.next;
        index--;
      }

      this.remove(toRemove);
    }
  }, {
    key: "isValidIndex",
    value: function isValidIndex(index) {
      if (index < 0 || index >= this.size) throw new Error('invalid index');
    }
  }]);

  return LinkedList;
}();

exports["default"] = LinkedList;