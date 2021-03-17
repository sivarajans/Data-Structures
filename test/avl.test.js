const AVL = require('../lib/AVL Tree/AVL Tree Or Self Balancing Binary Tree');
const SelfBalancedTree = AVL.default;
const TreeNode = AVL.TreeNode;

var assert = require('assert');


/*------------------------------------
TESTING AREA.
------------------------------------*/
describe("SelfBalancedTree", () => {
    it("right right case rotation", () => {
        // 1. right right case.
        let tree1 = new SelfBalancedTree();
        tree1.add(new TreeNode(10));
        tree1.add(new TreeNode(12));
        tree1.add(new TreeNode(5));
        tree1.add(new TreeNode(11));
        tree1.add(new TreeNode(14));
        tree1.add(new TreeNode(18));
        tree1.add(new TreeNode(13));
        assert.strictEqual(18, tree1.root.right.right.value);
        assert.strictEqual(5, tree1.root.left.left.value);
        assert.strictEqual(11, tree1.root.left.right.value);
    });

    it("left left case rotation", () => {
        let tree2 = new SelfBalancedTree();
        tree2.add(new TreeNode(10));
        tree2.add(new TreeNode(12));
        tree2.add(new TreeNode(7));
        tree2.add(new TreeNode(9));
        tree2.add(new TreeNode(5));
        tree2.add(new TreeNode(6));
        tree2.add(new TreeNode(1));
        assert.strictEqual(1, tree2.root.left.left.value);
        assert.strictEqual(9, tree2.root.right.left.value);
    });
    it("left right case rotation", () => {
        let tree3 = new SelfBalancedTree();
        tree3.add(new TreeNode(12));
        tree3.add(new TreeNode(15));
        tree3.add(new TreeNode(8));
        tree3.add(new TreeNode(10));
        tree3.add(new TreeNode(6));
        tree3.add(new TreeNode(9));
        tree3.add(new TreeNode(11));
        assert.strictEqual(6, tree3.root.left.left.value);
        assert.strictEqual(11, tree3.root.right.left.value);
    });
    it("right left case rotation", () => {
        let tree4 = new SelfBalancedTree();
        tree4.add(new TreeNode(10));
        tree4.add(new TreeNode(5));
        tree4.add(new TreeNode(16));
        tree4.add(new TreeNode(17));
        tree4.add(new TreeNode(14));
        tree4.add(new TreeNode(12));
        tree4.add(new TreeNode(15));
        assert.strictEqual(5, tree4.root.left.left.value);
        assert.strictEqual(12, tree4.root.left.right.value);
    });

    it("big tree case", () => {
        let tree = new SelfBalancedTree();
        tree.add(new TreeNode(30));
        tree.add(new TreeNode(25));
        tree.add(new TreeNode(41));
        tree.add(new TreeNode(20));
        tree.add(new TreeNode(26));
        tree.add(new TreeNode(35));
        tree.add(new TreeNode(48));
        tree.add(new TreeNode(10));
        tree.add(new TreeNode(21));
        tree.add(new TreeNode(33));
        tree.add(new TreeNode(36));
        tree.add(new TreeNode(51));
        tree.add(new TreeNode(58));
        tree.add(new TreeNode(60));
        assert.strictEqual(10, tree.root.left.left.left.left.value);
        assert.strictEqual(36, tree.root.left.right.right.value);
        assert.strictEqual(tree.size, 14);
        assert.strictEqual(tree.root.value, 41);
    });

});

