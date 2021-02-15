/*
AVL - Self Balanced Tree - it is a binary tree that is balanced automatically
 when node insertion or removal takes place.

 Valid balance factors are -1, 0, 1

 Balance Factor (BF) = Height Of Right Side - Height of Left Side.

 Below example follows below rules.
 1. valid left child  - less than parent node
 2. valid right child - higher than parent node
*/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class SelfBalancedTree {

    constructor() {
        this.root = null;
        this.size = 0;
    }

    add(node) {
        if (this.root == null)
            this.root = node;
        else {
            this._add(this.root, node);
        }
        this.size++;
        this.balancing(this.root);
    }

    _add(root, node) {
        if (node.value < root.value) {
            if (root.left == null)
                root.left = node;
            else
                this._add(root.left, node);
        }
        else if (node.value > root.value) {
            if (root.right == null)
                root.right = node;
            else
                this._add(root.right, node);
        }
    }

    findBalanceFactor(node) {
        if (node == null) return 0;
        let leftDepth = node.left == null ? 0 : this.depthOfNode(node.left);
        let rightDepth = node.right == null ? 0 : this.depthOfNode(node.right);
        return rightDepth - leftDepth;
    }

    balancing(node) {
        let bf = this.findBalanceFactor(node);
        if (bf == -2) {
            let lf = this.findBalanceFactor(node.left);
            if (lf <= -1) {
                this.leftLeftCase(node);
            }
            else if (lf >= 1) {
                this.leftRightCase(node);
            }
        }
        else if (bf == 2) {
            let rf = this.findBalanceFactor(node.right);
            if (rf <= -1) {
                this.rightLeftCase(node);
            }
            else if (rf >= 1) {
                this.rightRightCase(node);
            }
        }
    }

    depthOfNode(node) {
        if (node == null) return 0;
        let leftSide = this.depthOfNode(node.left);
        let rightSide = this.depthOfNode(node.right);
        return Math.max(leftSide, rightSide) + 1;
    }


    leftLeftCase(node) {
        this.root = this.rightRotation(node);
    }

    leftRightCase(node) {
        node.left = this.leftRotation(node.left);
        this.leftLeftCase(node);
    }

    rightRightCase(node) {
        this.root = this.leftRotation(node);
    }

    rightLeftCase(node) {
        node.right = this.rightRotation(node.right);
        this.rightRightCase(node);
    }


    rightRotation(node) {
        let newroot = node.left;
        node.left = newroot.right;
        newroot.right = node;
        return newroot;
    }

    leftRotation(node) {
        let newroot = node.right;
        node.right = newroot.left;
        newroot.left = node;
        return newroot;
    }

}


/*------------------------------------
TESTING AREA.
------------------------------------*/
// 1. right right case.
let tree1 = new SelfBalancedTree();
tree1.add(new TreeNode(10));
tree1.add(new TreeNode(12));
tree1.add(new TreeNode(5));
tree1.add(new TreeNode(11));
tree1.add(new TreeNode(14));
tree1.add(new TreeNode(18));
tree1.add(new TreeNode(13));
console.log(tree1);


// 2. left left case.
let tree2 = new SelfBalancedTree();
tree2.add(new TreeNode(10));
tree2.add(new TreeNode(12));
tree2.add(new TreeNode(7));
tree2.add(new TreeNode(9));
tree2.add(new TreeNode(5));
tree2.add(new TreeNode(6));
tree2.add(new TreeNode(1));
console.log(tree2);


// 3. left right case.
let tree3 = new SelfBalancedTree();
tree3.add(new TreeNode(12));
tree3.add(new TreeNode(15));
tree3.add(new TreeNode(8));
tree3.add(new TreeNode(10));
tree3.add(new TreeNode(6));
tree3.add(new TreeNode(9));
tree3.add(new TreeNode(11));
console.log(tree3);

// 4. right left case.
let tree4 = new SelfBalancedTree();
tree4.add(new TreeNode(10));
tree4.add(new TreeNode(5));
tree4.add(new TreeNode(16));
tree4.add(new TreeNode(17));
tree4.add(new TreeNode(14));
tree4.add(new TreeNode(12));
tree4.add(new TreeNode(15));
console.log(tree4);


// big tree case.
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
console.log(tree);
