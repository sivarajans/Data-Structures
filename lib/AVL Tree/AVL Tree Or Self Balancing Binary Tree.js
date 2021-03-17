"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TreeNode = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
AVL - Self Balanced Tree - it is a binary tree that is balanced automatically
 when node insertion or removal takes place.

 Valid balance factors are -1, 0, 1

 Balance Factor (BF) = Height Of Right Side - Height of Left Side.

 Below example follows below rules.
 1. valid left child  - less than parent node
 2. valid right child - higher than parent node
*/
var TreeNode = function TreeNode(value) {
  _classCallCheck(this, TreeNode);

  this.value = value;
  this.left = null;
  this.right = null;
};

exports.TreeNode = TreeNode;

var SelfBalancedTree = /*#__PURE__*/function () {
  function SelfBalancedTree() {
    _classCallCheck(this, SelfBalancedTree);

    this.root = null;
    this.size = 0;
  }

  _createClass(SelfBalancedTree, [{
    key: "add",
    value: function add(node) {
      if (this.root == null) this.root = node;else {
        this._add(this.root, node);
      }
      this.size++;
      this.balancing(this.root);
    }
  }, {
    key: "_add",
    value: function _add(root, node) {
      if (node.value < root.value) {
        if (root.left == null) root.left = node;else this._add(root.left, node);
      } else if (node.value > root.value) {
        if (root.right == null) root.right = node;else this._add(root.right, node);
      }
    }
  }, {
    key: "findBalanceFactor",
    value: function findBalanceFactor(node) {
      if (node == null) return 0;
      var leftDepth = node.left == null ? 0 : this.depthOfNode(node.left);
      var rightDepth = node.right == null ? 0 : this.depthOfNode(node.right);
      return rightDepth - leftDepth;
    }
  }, {
    key: "balancing",
    value: function balancing(node) {
      var bf = this.findBalanceFactor(node);

      if (bf == -2) {
        var lf = this.findBalanceFactor(node.left);

        if (lf <= -1) {
          this.leftLeftCase(node);
        } else if (lf >= 1) {
          this.leftRightCase(node);
        }
      } else if (bf == 2) {
        var rf = this.findBalanceFactor(node.right);

        if (rf <= -1) {
          this.rightLeftCase(node);
        } else if (rf >= 1) {
          this.rightRightCase(node);
        }
      }
    }
  }, {
    key: "depthOfNode",
    value: function depthOfNode(node) {
      if (node == null) return 0;
      var leftSide = this.depthOfNode(node.left);
      var rightSide = this.depthOfNode(node.right);
      return Math.max(leftSide, rightSide) + 1;
    }
  }, {
    key: "leftLeftCase",
    value: function leftLeftCase(node) {
      this.root = this.rightRotation(node);
    }
  }, {
    key: "leftRightCase",
    value: function leftRightCase(node) {
      node.left = this.leftRotation(node.left);
      this.leftLeftCase(node);
    }
  }, {
    key: "rightRightCase",
    value: function rightRightCase(node) {
      this.root = this.leftRotation(node);
    }
  }, {
    key: "rightLeftCase",
    value: function rightLeftCase(node) {
      node.right = this.rightRotation(node.right);
      this.rightRightCase(node);
    }
  }, {
    key: "rightRotation",
    value: function rightRotation(node) {
      var newroot = node.left;
      node.left = newroot.right;
      newroot.right = node;
      return newroot;
    }
  }, {
    key: "leftRotation",
    value: function leftRotation(node) {
      var newroot = node.right;
      node.right = newroot.left;
      newroot.left = node;
      return newroot;
    }
  }]);

  return SelfBalancedTree;
}();

exports["default"] = SelfBalancedTree;