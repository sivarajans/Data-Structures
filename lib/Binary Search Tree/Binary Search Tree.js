"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=exports.TreeNode=void 0;function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var TreeNode=function TreeNode(value){_classCallCheck(this,TreeNode),this.value=value,this.left=void 0,this.right=void 0};exports.TreeNode=TreeNode;var BinarySearchTree=function(){function BinarySearchTree(array){if(_classCallCheck(this,BinarySearchTree),this.root=void 0,this.size=0,array)for(var i=0;i<array.length;i++)this.addByValue(array[i])}return _createClass(BinarySearchTree,[{key:"throwIfInvalidNode",value:function throwIfInvalidNode(node){if(!(node instanceof TreeNode))throw new Error("invalid instance of TreeNode")}},{key:"addByValue",value:function addByValue(value){this.add(new TreeNode(value))}},{key:"add",value:function add(node){if(this.throwIfInvalidNode(node),null==this.root)this.root=node;else for(var currentNode=this.root;null!=currentNode;)if(currentNode.value==node.value)throw new Error("duplicate not allowed");else if(node.value<currentNode.value){if(null==currentNode.left){currentNode.left=node;break}else{currentNode=currentNode.left;continue}}else if(node.value>currentNode.value)if(null==currentNode.right){currentNode.right=node;break}else{currentNode=currentNode.right;continue}this.size++}},{key:"remove",value:function remove(node){if(this.throwIfInvalidNode(node),null==this.find(node.value))throw new Error("node not found");this.root=this._removeFromTree(this.root,node),this.size--}},{key:"removeByValue",value:function removeByValue(value){var node=this.find(value);if(null==node)throw new Error("node not found");this.remove(node)}},{key:"_removeFromTree",value:function _removeFromTree(root,node){if(root.value<node.value)root.right=this._removeFromTree(root.right,node);else if(root.value>node.value)root.left=this._removeFromTree(root.left,node);else if(root.value==node.value){if(null==root.left&&null==root.right)return;if(null==root.right)return root.left;if(null==root.left)return root.right;var greatest=this.findGreatestFromLeft(root);return this._removeFromTree(root,greatest),greatest.left=root.left,greatest.right=root.right,greatest}return root}},{key:"find",value:function find(value){for(var currentNode=this.root;currentNode;){if(currentNode.value==value)return currentNode;currentNode.value<value?currentNode=currentNode.right:currentNode.value>value&&(currentNode=currentNode.left)}}},{key:"findGreatestFromLeft",value:function findGreatestFromLeft(root){for(var greatest=root.left;greatest.right;)greatest=greatest.right;return greatest}}]),BinarySearchTree}();exports["default"]=BinarySearchTree;