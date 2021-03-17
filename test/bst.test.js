
const BST = require('../lib/Binary Search Tree/Binary Search Tree');
const BinarySearchTree = BST.default;
const TreeNode = BST.TreeNode;
var assert = require('assert');

describe("BinarySearchTree", () => {
    it("verify binary search tree result", () => {
        let tree = new BinarySearchTree([5, 9, 3, 2, 4, 7, 8, 6, 11, 13, 18]);

        assert.strictEqual('{"root":{"value":5,"left":{"value":3,"left":{"value":2},"right":{"value":4}},"right":{"value":9,"left":{"value":7,"left":{"value":6},"right":{"value":8}},"right":{"value":11,"right":{"value":13,"right":{"value":18}}}}},"size":11}', JSON.stringify(tree));

        tree.add(new TreeNode(23));
        tree.remove(tree.root.right);

        // 23 added, 9 removed
        assert.strictEqual('{"root":{"value":5,"left":{"value":3,"left":{"value":2},"right":{"value":4}},"right":{"value":8,"left":{"value":7,"left":{"value":6}},"right":{"value":11,"right":{"value":13,"right":{"value":18,"right":{"value":23}}}}}},"size":11}', JSON.stringify(tree));

        tree.addByValue(1);
        tree.removeByValue(11);
        // 1 added, 11 removed
        assert.strictEqual('{"root":{"value":5,"left":{"value":3,"left":{"value":2,"left":{"value":1}},"right":{"value":4}},"right":{"value":8,"left":{"value":7,"left":{"value":6}},"right":{"value":13,"right":{"value":18,"right":{"value":23}}}}},"size":11}', JSON.stringify(tree));
    });
});

