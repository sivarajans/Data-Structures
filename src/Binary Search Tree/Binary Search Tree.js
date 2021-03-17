/*
Binary Search Tree - it is called sorted binary tree, 
satisfies that 
    a. left node of parent less that it
    b. right node of parent greater than it.
*/
export class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
}

export default class BinarySearchTree {

    // using given array bst can be initialized.
    constructor(array) {
        this.root = undefined;
        this.size = 0;

        if (array)
            for (let i = 0; i < array.length; i++)
                this.addByValue(array[i]);
    }

    throwIfInvalidNode(node) {
        if (!(node instanceof TreeNode))
            throw new Error('invalid instance of TreeNode');
    }

    addByValue(value) {
        this.add(new TreeNode(value));
    }

    add(node) {
        this.throwIfInvalidNode(node);

        if (this.root == undefined)
            this.root = node;
        else {
            let currentNode = this.root;
            while (currentNode != undefined) {

                if (currentNode.value == node.value)
                    throw new Error('duplicate not allowed');

                else if (node.value < currentNode.value) {
                    if (currentNode.left == undefined) {
                        currentNode.left = node;
                        break;
                    }
                    else {
                        currentNode = currentNode.left;
                        continue;
                    }
                }
                else if (node.value > currentNode.value) {
                    if (currentNode.right == undefined) {
                        currentNode.right = node;
                        break;
                    }
                    else {
                        currentNode = currentNode.right;
                        continue;
                    }
                }
            }
        }
        this.size++;
    }


    remove(node) {
        this.throwIfInvalidNode(node);

        if (this.find(node.value) == undefined) throw new Error('node not found');

        this.root = this._removeFromTree(this.root, node);

        this.size--;
    }

    removeByValue(value) {
        let node = this.find(value)
        if (node == undefined) throw new Error('node not found');

        this.remove(node);
    }

    _removeFromTree(root, node) {

        if (root.value < node.value) {
            root.right = this._removeFromTree(root.right, node);
        }
        else if (root.value > node.value) {
            root.left = this._removeFromTree(root.left, node);
        }
        else if (root.value == node.value) {
            // element to be removed as it matches.

            if (root.left == undefined && root.right == undefined) // no children
                return undefined;
            else if (root.right == undefined) // only left child
                return root.left;
            else if (root.left == undefined) // only right child
                return root.right;
            else { // have both child,
                // find greatest from left to replace.
                let greatest = this.findGreatestFromLeft(root);
                this._removeFromTree(root, greatest);

                greatest.left = root.left;
                greatest.right = root.right;

                return greatest;
            }
        }
        return root;
    }

    find(value) {
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value == value)
                return currentNode;
            else if (currentNode.value < value)
                currentNode = currentNode.right;
            else if (currentNode.value > value)
                currentNode = currentNode.left;
        }
        return undefined;
    }

    // finds the greatest value from left - used for swapping on deletion
    findGreatestFromLeft(root) {
        let greatest = root.left;
        while (greatest.right) {
            greatest = greatest.right;
        }
        return greatest;
    }
}


