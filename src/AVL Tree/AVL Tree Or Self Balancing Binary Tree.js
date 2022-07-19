/*
AVL - Self Balanced Tree - it is a binary tree that is balanced automatically
 when node insertion or removal takes place.

 Valid balance factors are -1, 0, 1

 Balance Factor (BF) = Height Of Right Side - Height of Left Side.

 Below example follows below rules.
 1. valid left child  - less than parent node
 2. valid right child - higher than parent node
*/

export class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
export default class SelfBalancedTree {

    constructor(array) {
        this.root = null;
        this.size = 0;
        if (array?.length > 0) {
            array.forEach(element => {
                this.add(element);
            });
        }
    }

    add(value) {
        let node = new TreeNode(value);
        if (this.root == null)
            this.root = node;
        else {
            this._add(this.root, node);
            this.root = this.balancing(this.root);
        }
        this.size++;
    }

    _add(parent, node) {
        if (node.value < parent.value) {
            if (parent.left == null)
                parent.left = node;
            else {
                this._add(parent.left, node);
                parent.left = this.balancing(parent.left);
            }
        }
        else if (node.value > parent.value) {
            if (parent.right == null)
                parent.right = node;
            else {
                this._add(parent.right, node);
                parent.right = this.balancing(parent.right);
            }
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
                return this.leftLeftCase(node);
            }
            else if (lf >= 1) {
                return this.leftRightCase(node);
            }
        }
        else if (bf == 2) {
            let rf = this.findBalanceFactor(node.right);
            if (rf <= -1) {
                return this.rightLeftCase(node);
            }
            else if (rf >= 1) {
                return this.rightRightCase(node);
            }
        }
        return node;
    }

    depthOfNode(node) {
        if (node == null) return 0;
        let leftSide = this.depthOfNode(node.left);
        let rightSide = this.depthOfNode(node.right);
        return Math.max(leftSide, rightSide) + 1;
    }


    leftLeftCase(node) {
        return this.rightRotation(node);
    }

    leftRightCase(node) {
        node.left = this.leftRotation(node.left);
        return this.leftLeftCase(node);
    }

    rightRightCase(node) {
        return this.leftRotation(node);
    }

    rightLeftCase(node) {
        node.right = this.rightRotation(node.right);
        return this.rightRightCase(node);
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

