"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TreeNode = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Binary Search Tree - it is called sorted binary tree, 
satisfies that 
    a. left node of parent less that it
    b. right node of parent greater than it.
*/
var TreeNode = function TreeNode(value) {
  _classCallCheck(this, TreeNode);

  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

exports.TreeNode = TreeNode;

var BinarySearchTree = /*#__PURE__*/function () {
  // using given array bst can be initialized.
  function BinarySearchTree(array) {
    _classCallCheck(this, BinarySearchTree);

    this.root = undefined;
    this.size = 0;
    if (array) for (var i = 0; i < array.length; i++) {
      this.addByValue(array[i]);
    }
  }

  _createClass(BinarySearchTree, [{
    key: "throwIfInvalidNode",
    value: function throwIfInvalidNode(node) {
      if (!(node instanceof TreeNode)) throw new Error('invalid instance of TreeNode');
    }
  }, {
    key: "addByValue",
    value: function addByValue(value) {
      this.add(new TreeNode(value));
    }
  }, {
    key: "add",
    value: function add(node) {
      this.throwIfInvalidNode(node);
      if (this.root == undefined) this.root = node;else {
        var currentNode = this.root;

        while (currentNode != undefined) {
          if (currentNode.value == node.value) throw new Error('duplicate not allowed');else if (node.value < currentNode.value) {
            if (currentNode.left == undefined) {
              currentNode.left = node;
              break;
            } else {
              currentNode = currentNode.left;
              continue;
            }
          } else if (node.value > currentNode.value) {
            if (currentNode.right == undefined) {
              currentNode.right = node;
              break;
            } else {
              currentNode = currentNode.right;
              continue;
            }
          }
        }
      }
      this.size++;
    }
  }, {
    key: "remove",
    value: function remove(node) {
      this.throwIfInvalidNode(node);
      if (this.find(node.value) == undefined) throw new Error('node not found');
      this.root = this._removeFromTree(this.root, node);
      this.size--;
    }
  }, {
    key: "removeByValue",
    value: function removeByValue(value) {
      var node = this.find(value);
      if (node == undefined) throw new Error('node not found');
      this.remove(node);
    }
  }, {
    key: "_removeFromTree",
    value: function _removeFromTree(root, node) {
      if (root.value < node.value) {
        root.right = this._removeFromTree(root.right, node);
      } else if (root.value > node.value) {
        root.left = this._removeFromTree(root.left, node);
      } else if (root.value == node.value) {
        // element to be removed as it matches.
        if (root.left == undefined && root.right == undefined) // no children
          return undefined;else if (root.right == undefined) // only left child
          return root.left;else if (root.left == undefined) // only right child
          return root.right;else {
          // have both child,
          // find greatest from left to replace.
          var greatest = this.findGreatestFromLeft(root);

          this._removeFromTree(root, greatest);

          greatest.left = root.left;
          greatest.right = root.right;
          return greatest;
        }
      }

      return root;
    }
  }, {
    key: "find",
    value: function find(value) {
      var currentNode = this.root;

      while (currentNode) {
        if (currentNode.value == value) return currentNode;else if (currentNode.value < value) currentNode = currentNode.right;else if (currentNode.value > value) currentNode = currentNode.left;
      }

      return undefined;
    } // finds the greatest value from left - used for swapping on deletion

  }, {
    key: "findGreatestFromLeft",
    value: function findGreatestFromLeft(root) {
      var greatest = root.left;

      while (greatest.right) {
        greatest = greatest.right;
      }

      return greatest;
    }
  }]);

  return BinarySearchTree;
}();

exports["default"] = BinarySearchTree;