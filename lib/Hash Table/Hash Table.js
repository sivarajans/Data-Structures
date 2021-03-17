"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _linkedList = _interopRequireDefault(require("@sivarajans/linked-list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HashTable = /*#__PURE__*/function () {
  function HashTable(maxLength) {
    _classCallCheck(this, HashTable);

    this.elements = [];
    this.maxLength = maxLength || 100;
  }

  _createClass(HashTable, [{
    key: "add",
    value: function add(key, value) {
      var targetIndex = this.hash(key);
      if (this.elements[targetIndex] == null) this.elements[targetIndex] = {
        key: key,
        value: value
      };else this._seperateChaining(targetIndex, key, value);
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var index = this.hash(key);
      if (this.elements[index] == null) return false;

      if (this.elements[index] instanceof _linkedList["default"]) {
        var node = this._findMatchingLinkedListNode(index, key);

        if (node != null) {
          this.elements[index].remove(node);
          return true;
        }
      } else {
        if (this.elements[index].key == key) {
          this.elements[index] = null;
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_findMatchingLinkedListNode",
    value: function _findMatchingLinkedListNode(index, key) {
      var currentNode = this.elements[index].head;

      while (currentNode != null) {
        if (currentNode.data.key == key) {
          return currentNode;
        }

        currentNode = currentNode.next;
      }

      return null;
    }
  }, {
    key: "find",
    value: function find(key) {
      var index = this.hash(key);
      if (this.elements[index] == null) return null;else if (this.elements[index] instanceof _linkedList["default"]) {
        var node = this._findMatchingLinkedListNode(index, key);

        if (node == null) return null;
        return node.data;
      } else {
        if (this.elements[index].key == key) return this.elements[index];else return null;
      }
    }
  }, {
    key: "hash",
    value: function hash(key) {
      var _key$length;

      return (isNaN(key) ? (_key$length = key.length) !== null && _key$length !== void 0 ? _key$length : 0 : parseInt(key)) % this.maxLength;
    }
  }, {
    key: "_seperateChaining",
    value: function _seperateChaining(index, key, value) {
      if (this.elements[index] instanceof _linkedList["default"]) {
        this.elements[index].add({
          key: key,
          value: value
        });
      } else {
        var ll = new _linkedList["default"]();
        ll.add(this.elements[index]);
        ll.add({
          key: key,
          value: value
        });
        this.elements[index] = ll;
      }
    }
  }]);

  return HashTable;
}();

exports["default"] = HashTable;