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
        tree1.add(10);
        tree1.add(12);
        tree1.add(5);
        tree1.add(11);
        tree1.add(14);
        tree1.add(18);
        tree1.add(13);
        assert.strictEqual(18, tree1.root.right.right.value);
        assert.strictEqual(5, tree1.root.left.left.value);
        assert.strictEqual(11, tree1.root.left.right.value);
    });

    it("left left case rotation", () => {
        let tree2 = new SelfBalancedTree();
        tree2.add(10);
        tree2.add((12));
        tree2.add((7));
        tree2.add((9));
        tree2.add((5));
        tree2.add((6));
        tree2.add((1));
        assert.strictEqual(1, tree2.root.left.left.value);
        assert.strictEqual(9, tree2.root.right.left.value);
    });
    it("left right case rotation", () => {
        let tree3 = new SelfBalancedTree();
        tree3.add((12));
        tree3.add((15));
        tree3.add((8));
        tree3.add((10));
        tree3.add((6));
        tree3.add((9));
        tree3.add((11));
        assert.strictEqual(6, tree3.root.left.left.value);
        assert.strictEqual(11, tree3.root.right.left.value);
    });
    it("right left case rotation", () => {
        let tree4 = new SelfBalancedTree();
        tree4.add((10));
        tree4.add((5));
        tree4.add((16));
        tree4.add((17));
        tree4.add((14));
        tree4.add((12));
        tree4.add((15));
        assert.strictEqual(5, tree4.root.left.left.value);
        assert.strictEqual(12, tree4.root.left.right.value);
    });

    it("big tree case", () => {
        let tree = new SelfBalancedTree();
        tree.add((30));
        tree.add((25));
        tree.add((41));
        tree.add((20));
        tree.add((26));
        tree.add((35));
        tree.add((48));
        tree.add((10));
        tree.add((21));
        tree.add((33));
        tree.add((36));
        tree.add((51));
        tree.add((58));
        tree.add((60));
        assert.strictEqual(10, tree.root.left.left.left.value);
        assert.strictEqual(36, tree.root.right.left.right.value);
        assert.strictEqual(tree.size, 14);
        assert.strictEqual(tree.root.value, 30);
    });

});

